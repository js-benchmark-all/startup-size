import { basename, dirname, relative, resolve } from 'node:path';
import { mkdirSync, rmSync } from 'node:fs';
import { build } from 'rolldown';
import { writeFile } from 'node:fs/promises';
import { scanFiles, tryWriteAsync } from '../lib/fs.ts';
import config from './config.ts';
import { fmt } from '../lib/format.ts';
import { runtimeFileContent } from '../lib/output.ts';

const BUNDLED_DIR = import.meta.dir + '/.out';
const SRC_DIR = import.meta.dir + '/src';

try {
  rmSync(BUNDLED_DIR, { recursive: true });
} catch {}
mkdirSync(BUNDLED_DIR, { recursive: true });

const INFO: any = {};

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
        console.log('Installed dependencies:', fmt.h1(categoryName));

        await Promise.all(
          scanFiles('**/*.build.ts', category).map(async (path) => {
            console.log('Running build script:', fmt.relativePath(path));
            await Bun.$`bun run ${path}`;
            console.log('Build script finished:', fmt.relativePath(path));
          }),
        );

        const CATEGORY_INFO = {} as Record<string, string>;

        await Promise.all(
          scanFiles('*.case.ts', category).map(async (casePath, caseIndex) => {
            const caseName = basename(casePath, '.case.ts');
            if (!config.include.case(categoryName, caseName)) {
              console.info('Ignored:', fmt.relativePath(casePath));
              return;
            }

            try {
              // Load initial content
              const entry = resolve(`${BUNDLED_DIR}/${categoryIndex}_${caseIndex}.js`);
              await writeFile(entry, runtimeFileContent(casePath));

              // Build
              await build({
                input: entry,
                logLevel: 'silent',
                transform: {
                  target: 'esnext',
                },
                output: {
                  codeSplitting: false,
                  file: entry,
                  postBanner: '// @bun',
                  minify: {
                    compress: false,
                    mangle: true,
                  },
                },
              });

              console.log('Built:', fmt.relativePath(casePath), '--->', fmt.relativePath(entry));
              CATEGORY_INFO[caseName] = entry;
            } catch (e) {
              console.error('Failed to build:', fmt.relativePath(casePath));
              console.error(e);
            }
          }),
        );

        console.log('Built:', fmt.h1(categoryName));
        INFO[categoryName] = CATEGORY_INFO;
      } catch (e) {
        console.error('Failed to build:', fmt.relativePath(category));
        console.error(e);
      }
    }),
);

tryWriteAsync(BUNDLED_DIR + '/info.json', JSON.stringify(INFO, null, 2));
