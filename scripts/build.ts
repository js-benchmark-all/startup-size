import { basename, dirname, relative, resolve } from "node:path";
import { utils, config, format } from "../lib/index.ts";
import { mkdirSync } from "node:fs";
import { rolldown } from "rolldown";
import { writeFile } from "node:fs/promises";
import { tryWriteAsync } from "../lib/utils.ts";

const SIZE_RESULT = {} as any;

try {
  mkdirSync(utils.BUNDLED_DIR, { recursive: true });
} catch {}

const info: any = {};

await Promise.all(
  utils
    .scan('**/package.json', utils.SOURCES_DIR)
    .filter((pkgPath) => !pkgPath.includes('/node_modules/'))
    .map(async (pkgPath, categoryIndex) => {
      const category = dirname(pkgPath);
      const categoryName = relative(utils.SOURCES_DIR, category);

      if (!config.FILTERS.includeCategory(categoryName)) {
        console.log('Ignored:', format.path(category));
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
          utils.scan('*.case.ts', category)
            .map(async (casePath, caseIndex) => {
              try {
                const entry = `${utils.BUNDLED_DIR}/${categoryIndex}_${caseIndex}.js`;
                await writeFile(
                  entry,
                  `import { now, s } from '${utils.STARTUP_MOD}';` +
                  `import '${casePath}';` +
                  'var e = now();' +
                  `console.log("${utils.LOG_PREFIX}" + (e - s));`
                );

                const input = await rolldown({
                  input: entry,
                  logLevel: 'silent',
                  transform: {
                    target: 'esnext'
                  }
                });
                const outputCode = (await input.write({
                  inlineDynamicImports: true,
                  file: entry,
                  banner: '// @bun',
                  minify: {
                    compress: false,
                    mangle: true
                  }
                })).output[0].code;

                {
                  const caseName = basename(casePath, '.case.ts');
                  categoryInfo[caseName] = resolve(entry);
                  categoryResults.push({
                    caseName,
                    size: {
                      minified: Buffer.from(outputCode).byteLength,
                      gzipped: Bun.gzipSync(outputCode).byteLength,
                    }
                  });
                }

                console.log('Built:', format.path(casePath), '--->', format.path(entry));
              } catch (e) {
                console.error('Failed to build:', format.path(casePath));
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
              data: categoryResults.map((v) => utils.bToKb(v.size[key]))
            }))
        }

        console.log('Built:', format.name(categoryName));
      } catch (e) {
        console.error('Failed to build:', format.path(category));
        console.error(e);
      }
    })
);

tryWriteAsync(utils.BUNDLED_DIR + '/info.json', JSON.stringify(info, null, 2));

// Write back updated result
await utils.writeResult('size', SIZE_RESULT);
