import { basename, dirname, relative, resolve } from "node:path";
import { mkdirSync, rmSync } from "node:fs";
import { build, rolldown } from "rolldown";
import { writeFile } from "node:fs/promises";
import { scanFiles, tryWriteAsync } from "../lib/fs.ts";
import { config } from "../lib/config.ts";
import { fmt } from "../lib/format.ts";
import { startupFileContent } from "../lib/startup";
import { writeCategoryResult } from "../lib/result.ts";

const SIZE_RESULT = {} as any;
const BUNDLED_DIR = import.meta.dir + '/../.out';
const SRC_DIR = import.meta.dir + '/../src';

try {
  rmSync(BUNDLED_DIR, { recursive: true });
} catch {}
mkdirSync(BUNDLED_DIR, { recursive: true });

const info: any = {};

await Promise.all(
  scanFiles('**/package.json', SRC_DIR)
    .filter((pkgPath) => !pkgPath.includes('/node_modules/'))
    .map(async (pkgPath, categoryIndex) => {
      const category = dirname(pkgPath);
      const categoryName = relative(SRC_DIR, category);

      if (!config.include.category(categoryName)) {
        console.info('Ignored:', fmt.relativePath(category));
        return;
      }

      try {
        await Bun.$`cd ${category} && bun i`.quiet();

        const categoryInfo = info[categoryName] = {} as any;
        const categoryResults: {
          caseName: string,
          size: Record<string, number> & {
            minified: number
          }
        }[] = [];

        await Promise.all(
          scanFiles('*.case.ts', category)
            .map(async (casePath, caseIndex) => {
              const caseName = basename(casePath, '.case.ts');
              if (!config.include.case(categoryName, caseName)) {
                console.info('Ignored:', fmt.relativePath(casePath));
                return;
              }

              try {
                // Load initial content
                const entry = resolve(`${BUNDLED_DIR}/${categoryIndex}_${caseIndex}.js`);
                const tmpFile = resolve(`${BUNDLED_DIR}/${categoryIndex}_${caseIndex}_tmp.js`)

                {
                  const actualCode = (await build({
                    input: casePath,
                    logLevel: 'silent',
                    transform: {
                      target: 'esnext'
                    },
                    output: {
                      inlineDynamicImports: true,
                      file: tmpFile,
                      banner: '// @bun',
                      minify: true
                    }
                  })).output[0].code;

                  // Load to results
                  categoryInfo[caseName] = entry;
                  categoryResults.push({
                    caseName,
                    size: {
                      minified: Buffer.from(actualCode).byteLength,
                      gzipped: Bun.gzipSync(actualCode).byteLength,
                    }
                  });
                }

                await writeFile(entry, startupFileContent(tmpFile));

                // Build
                await build({
                  input: entry,
                  logLevel: 'silent',
                  transform: {
                    target: 'esnext'
                  },
                  output: {
                    inlineDynamicImports: true,
                    file: entry,
                    banner: '// @bun',
                    minify: {
                      compress: false,
                      mangle: true
                    }
                  }
                });

                console.log('Built:', fmt.relativePath(casePath), '--->', fmt.relativePath(entry));
              } catch (e) {
                console.error('Failed to build:', fmt.relativePath(casePath));
                console.error(e);
              }
            })
        );

        categoryResults.sort((a, b) => a.size.minified - b.size.minified);
        // @ts-ignore
        SIZE_RESULT[categoryName] = {
          labels: categoryResults.map((v) => v.caseName),
          datasets: Object.keys(categoryResults[0].size)
            .map((key) => ({
              label: `${key} (kB)`,
              // Convert B to KB
              data: categoryResults.map((v) => +(v.size[key] / 1e3).toFixed(2))
            }))
        }

        console.log('Built:', fmt.h1(categoryName));
      } catch (e) {
        console.error('Failed to build:', fmt.relativePath(category));
        console.error(e);
      }
    })
);

tryWriteAsync(BUNDLED_DIR + '/info.json', JSON.stringify(info, null, 2));

// Write back updated result
await writeCategoryResult('size', SIZE_RESULT);
