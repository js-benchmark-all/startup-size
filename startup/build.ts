import { dirname, join, relative, resolve } from 'node:path';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';

import { build } from 'rolldown';
import swc from 'unplugin-swc';

import config, { type CasesConfig } from './config.ts';

import { scanFiles, tryWriteAsync } from '../lib/fs.ts';
import { fmt } from '../lib/format.ts';
import { startupFileContent } from '../lib/output.ts';
import runtimeName from '../lib/runtime-name.ts';
import externals from '../lib/bundler/externals.ts';

const BUNDLED_DIR = import.meta.dir + '/.out';
const SRC_DIR = import.meta.dir + '/src';

try {
  rmSync(BUNDLED_DIR, { recursive: true });
} catch {}
mkdirSync(BUNDLED_DIR, { recursive: true });

const INFO: any = {};

const IS_DEBUG = !!parseArgs({
  options: {
    debug: {
      type: 'boolean',
      multiple: false,
    },
  },
  strict: false,
}).values.debug;
IS_DEBUG && console.log(fmt.h1('DEBUG BUILD'));

const BUNDLER_PLUGINS = [
  swc.rolldown({
    jsc: {
      minify: IS_DEBUG
        ? {
            mangle: false,
            compress: {
              defaults: false,
              dead_code: true,
              passes: 3,
            },
          }
        : {
            mangle: true,
            compress: {
              const_to_let: true,
              passes: 3,
            },
          },
    },
  }),
  externals,
];

await Promise.all(
  scanFiles('**/*/.config.ts', SRC_DIR)
    .filter((configPath) => !configPath.includes('/node_modules/'))
    .map(async (configPath, categoryIndex) => {
      const categoryPath = dirname(configPath);
      const categoryName = relative(SRC_DIR, categoryPath);

      if (!config.include.category(categoryName)) {
        console.info('Ignored:', fmt.relativePath(categoryPath));
        return;
      }

      try {
        if (existsSync(join(categoryPath, 'package.json'))) {
          await Bun.$`cd ${categoryPath} && bun i`.quiet();
          console.log('Installed dependencies:', fmt.h1(categoryName));
        }

        const CONFIG = ((await import(configPath)).default as CasesConfig)(runtimeName);
        const CATEGORY_INFO = {} as Record<string, string>;
        const CONCURRENT_TASKS: Promise<void>[] = [];

        // Build cases
        {
          let currentCaseIndex = 0;

          const CASES = CONFIG.cases;

          for (const caseName in CASES) {
            const casePath = join(categoryPath, CASES[caseName]);
            if (!config.include.case(categoryName, caseName)) {
              console.info('Ignored:', fmt.relativePath(casePath));
              continue;
            }

            CONCURRENT_TASKS.push(
              (async (caseIndex) => {
                try {
                  // Load initial content
                  const entry = resolve(`${BUNDLED_DIR}/${categoryIndex}_${caseIndex}.js`);
                  await writeFile(entry, startupFileContent(casePath, runtimeName));

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
                    },
                    plugins: BUNDLER_PLUGINS,
                  });

                  console.log(
                    'Built:',
                    fmt.relativePath(casePath),
                    '--->',
                    fmt.relativePath(entry),
                  );

                  CATEGORY_INFO[caseName] = entry;
                } catch (e) {
                  console.error('Failed to build:', fmt.relativePath(casePath));
                  console.error(e);
                }
              })(currentCaseIndex++),
            );
          }
        }

        // Wait for the results
        await Promise.all(CONCURRENT_TASKS);

        console.log('Built:', fmt.h1(categoryName));
        INFO[categoryName] = CATEGORY_INFO;
      } catch (e) {
        console.error('Failed to build:', fmt.relativePath(categoryPath));
        console.error(e);
      }
    }),
);

tryWriteAsync(BUNDLED_DIR + '/info.json', JSON.stringify(INFO, null, 2));
