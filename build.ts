import { rolldown } from 'rolldown';
import { installDependencies } from "nypm";

import * as filters from './lib/filters.ts';
import * as utils from './lib/utils.ts';

import { rmSync } from 'node:fs';

const RUNS = 50;

try {
  rmSync(utils.BUNDLED_DIR, { recursive: true });
} catch {}

// Extract case name and category
const extractNameCategory = (path: string) => {
  const relativePath = path.slice(utils.SRC.length).slice(0, -'.case.ts'.length);

  let name = relativePath;
  if (name.endsWith('/index')) name = name.slice(0, -'/index'.length);

  // Parse to path and category
  const nameParts = name.split('/');
  const category = nameParts.slice(0, -1).join('/');
  name = nameParts[nameParts.length - 1];

  return { name, category, relativePath };
}

// Install dependencies
await Promise.all(
  [
    ...new Bun.Glob('**/package.json').scanSync({
      cwd: utils.SRC,
      absolute: true,
      followSymlinks: false,
    })
  ].map(
    (path) => {
      // No node_modules paths
      if (path.includes('/node_modules/')) return;

      const cwd = path.slice(0, -'/package.json'.length);
      const name = cwd.slice(utils.SRC.length);
      if (!filters.install(name)) return;

      console.log('Installing dependencies for', utils.format.name(name));
      return installDependencies({
        cwd,
        silent: true
      });
    }
  ).filter((o) => o != null)
);

// Only build necessary files
const files = [
  ...new Bun.Glob('**/*.case.ts').scanSync({
    cwd: utils.SRC,
    absolute: true,
  }),
].filter((path) => {
  const props = extractNameCategory(path);
  return filters.includeCase(props.name, props.category);
});

const buildOutput = (
  await Promise.all(
    files.map(
      async (casePath, i) => {
        const props = extractNameCategory(casePath);

        try {
          const input = await rolldown({
            input: casePath,
            resolve: {
              tsconfigFilename: utils.TSCONFIG,
            },
            logLevel: 'silent',
          });

          const outputPath = utils.BUNDLED_DIR + i + '.js';
          const output = (await input.write({
            inlineDynamicImports: true,
            file: outputPath,
            minify: {
              compress: false,
              removeWhitespace: true,
              mangle: true,
            },
            banner: '// @bun',
          })).output[0];

          const info = {
            ...props,
            bundled: outputPath,
            size: {
              minified: Buffer.from(output.code).byteLength,
              gzipped: Bun.gzipSync(output.code).byteLength,
            }
          };

          console.log(
            'Built',
            utils.format.name(props.relativePath),
            'to',
            utils.format.relativePath(outputPath)
          );
          return info;
        } catch (e) {
          console.error(e);
          console.error('Failed to build:', utils.format.header(props.relativePath));
        }
      }
    )
  )
).filter((o) => o != null);

utils.tryWriteAsync(
  utils.OUTPUT_DIR + '_.js',
  `// @bun
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const n = (() => {
  try {
    Bun.nanoseconds();
    return Bun.nanoseconds;
  } catch {}
  try {
    $.agent.monotonicNow();
    return () => 1e6 * $.agent.monotonicNow();
  } catch {}
  try {
    $262.agent.monotonicNow();
    return () => 1e6 * $262.agent.monotonicNow();
  } catch {}
  try {
    const now = performance.now.bind(performance);
    now(); return () => 1e6 * now();
  } catch { return () => 1e6 * Date.now(); }
})();
const gc = (() => {
  try { return (Bun.gc(true), () => Bun.gc(true)); } catch { }
  try { return (globalThis.gc(), () => globalThis.gc()); } catch { }
  try { return (globalThis.__gc(), () => globalThis.__gc()); } catch { }
  try { return (globalThis.std.gc(), () => globalThis.std.gc()); } catch { }
  try { return (globalThis.$262.gc(), () => globalThis.$262.gc()); } catch { }
  try { return (globalThis.tjs.engine.gc.run(), () => globalThis.tjs.engine.gc.run()); } catch { }
  return Object.assign(globalThis.Graal ? () => new Uint8Array(2 ** 29) : () => new Uint8Array(2 ** 30), { fallback: true });
})();

const results = [];
let s = 0, e = 0, a = 0;
for (let i = 0; i < 100; i++) {
  s = n();
  e = n();
  s = e - s;
  gc();
}
${buildOutput
  .map(
    (o) => `
require.cache = {};
gc();
s = n();
require(${JSON.stringify(o.bundled)});
e = n();
results.push({
  name: ${JSON.stringify(o.name)},
  category: ${JSON.stringify(o.category)},
  startup: e - s
});`,
  )
  .join('\n')}
export default results;`,
);

utils.tryWriteAsync(
  utils.OUTPUT_DIR + '_.d.ts',
  `declare const results: {
  name: string,
  category: string,
  startup: number
}[];
export default results;`,
);

utils.tryWriteAsync(
  utils.ALL_RESULTS + 'size.json',
  JSON.stringify(
    buildOutput.map((o) => ({
      name: o.name,
      category: o.category,
      size: o.size
    })),
    null, 4
  )
);