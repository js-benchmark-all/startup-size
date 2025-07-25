import { build } from 'rolldown';
import { installDependencies } from "nypm";

import * as filters from './lib/filters.ts';
import * as utils from './lib/utils.ts';

import { rmSync, readFileSync } from 'node:fs';

const OUTPUT_DIR = import.meta.dir + '/.startup/';
const BUNDLED_DIR = OUTPUT_DIR + 'bundled/';
const SRC = import.meta.dir + '/src/';

try {
  rmSync(BUNDLED_DIR, { recursive: true });
} catch {}

// Extract case name and category
const extractNameCategory = (path: string) => {
  let name = path.slice(SRC.length).slice(0, -'.case.ts'.length);
  if (name.endsWith('/index')) name = name.slice(0, -'/index'.length);

  // Parse to path and category
  const nameParts = name.split('/');
  const category = nameParts.slice(0, -1).join('/');
  name = nameParts[nameParts.length - 1];

  return { name, category };
}

// Install dependencies
await Promise.all(
  Array.from(
    new Bun.Glob('**/package.json').scanSync({
      cwd: SRC,
      absolute: true,
      followSymlinks: false,
    })
  ).map(
    (path) => {
      // No node_modules paths
      if (path.includes('/node_modules/')) return;

      const cwd = path.slice(0, -'/package.json'.length);
      const name = cwd.slice(SRC.length);
      if (!filters.install(name)) return;

      console.log('Install dependencies:', utils.format.name(name));
      return installDependencies({
        cwd,
        silent: true
      });
    }
  ).filter((o) => o != null)
);

// Store calculated chunks
const chunks: Record<string, {
  size: {
    minified: number,
    gzipped: number
  }
}> = {};

// Only build necessary files
const files = Array.from(
  new Bun.Glob('**/*.case.ts').scanSync({
    cwd: SRC,
    absolute: true,
  }),
).filter((path) => {
  const props = extractNameCategory(path);
  return filters.includeCase(props.name, props.category);
});

// Retrieve information about cases
const buildOutput = (
  await build({
    input: files,
    resolve: {
      tsconfigFilename: import.meta.dir + '/tsconfig.json',
    },
    output: {
      dir: BUNDLED_DIR,
      minify: {
        compress: false,
        removeWhitespace: true,
        mangle: true,
      },
      inlineDynamicImports: true,
      banner: '// @bun',
      advancedChunks: {
        maxSize: Number.MAX_SAFE_INTEGER
      }
    },
    logLevel: 'silent'
  })
).output
  .map((o) => {
    if (o.type !== 'chunk' || o.facadeModuleId == null || !o.isEntry) return;
    console.log('Built entry:', utils.format.header(o.fileName));

    // Calculate file size & chunk size
    const size = {
      minified: Buffer.from(o.code).byteLength,
      gzipped: Bun.gzipSync(o.code).byteLength,
    };
    for (const chunk of o.imports) {
      const chunkInfo = chunks[chunk] ??= {
        size: {
          minified: Bun.file(BUNDLED_DIR + chunk).size,
          gzipped: Bun.gzipSync(readFileSync(BUNDLED_DIR + chunk)).byteLength
        }
      }

      size.minified += chunkInfo.size.minified;
      size.gzipped += chunkInfo.size.gzipped;
    }

    return {
      ...extractNameCategory(o.facadeModuleId),
      bundled: BUNDLED_DIR + o.fileName,
      size
    };
  })
  .filter((o) => o != null);

await Bun.write(
  OUTPUT_DIR + '_.js',
  `// @bun
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
for (let i = 0; i < 100; i++) n();

const results = [];
let s, e;
${buildOutput
  .map(
    (o) => `gc();
s = n();
await import(${JSON.stringify(o.bundled)});
e = n();
results.push({
  name: ${JSON.stringify(o.name)},
  category: ${JSON.stringify(o.category)},
  ns: e - s,
  size: {
    minified: ${o.size.minified},
    gzipped: ${o.size.gzipped}
  }
});`,
  )
  .join('\n')}
export default results;`,
);

await Bun.write(
  OUTPUT_DIR + '_.d.ts',
  `declare const results: {
  name: string,
  category: string,
  ns: number,
  size: {
    minified: number,
    gzipped: number
  }
}[];
export default results;`,
);
