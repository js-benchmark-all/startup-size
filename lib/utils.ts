import pc from 'picocolors';
import { mkdir, rm, writeFile } from 'node:fs';
import { resolve, dirname } from 'node:path/posix';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = resolve(
  import.meta.dirname ||
  import.meta.dir ||
  dirname(fileURLToPath(import.meta.url)),
  '..'
);

export const RESULT_DIRNAME = '.results/';
export const ALL_RESULTS = ROOT_DIR + '/' + RESULT_DIRNAME;

export const OUTPUT_DIR = ROOT_DIR + '/.startup/';
export const BUNDLED_DIR = OUTPUT_DIR + '/bundled/';

export const SRC = ROOT_DIR + '/src/';
export const TSCONFIG = ROOT_DIR + '/tsconfig.json';

export const RUNTIME = globalThis.Bun
  ? `bun[${Bun.version}]`
  : globalThis.Deno
    ? `deno[${Deno.version.deno}]_v8[${Deno.version.v8}]`
    : `node[${process.version}]_v8[${process.versions.v8}]`;

export const relativePath = (dir: string) => dir.startsWith(ROOT_DIR) ? '.' + dir.slice(ROOT_DIR.length) : dir;

const createUnitFormat = (units: string[], sep: number) => (n: number) => {
  let i = 0;
  while (n >= sep && i < units.length - 1) {
    i++;
    n /= sep;
  }
  return pc.yellowBright(n.toFixed(2) + units[i]);
};

export const format = {
  time: createUnitFormat(['ns', 'us', 'ms', 's'], 1000),
  byte: createUnitFormat(['b', 'kb', 'mb'], 1000),
  name: (name: string) => pc.bold(pc.cyan(name)),
  multiplier: (x: number) => pc.greenBright(x.toFixed(2) + 'x'),
  header: pc.bold,
  relativePath: (path: string) => pc.bold(relativePath(path)),
  success: pc.greenBright,
  error: pc.redBright,
};

export const tryWriteAsync = (path: string, content: string) =>
  writeFile(path, content, (err) => {
    if (err !== null)
      console.log('Failed to write file:', format.relativePath(path));
    else
      console.log('File written successfully:', format.relativePath(path));
  });

export const tryMkdirAsync = (path: string, success: () => any) => {
  mkdir(path, (err) => {
    if (err !== null && err.code === 'ENOENT') {
      console.log('Failed to create directory:', format.relativePath(path));
      return;
    }

    console.log('Directory created:', format.relativePath(path));
    success();
  });
};

export const tryRmAsync = (path: string) => {
  rm(path, {
    recursive: true,
  }, (err) => {
    if (err !== null && err.code === 'ENOENT') {
      console.log('Failed to remove:', format.relativePath(path));
      return;
    }

    console.log('Remove directory successfully:', format.relativePath(path));
  })
}
