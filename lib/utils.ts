import { mkdir, rm, writeFile } from 'node:fs';
import { relative } from 'node:path/posix';
import * as format from './format.ts';

export const LOG_PREFIX = '__LOG_PREFIX_FOR_READING__';

export const CWD = process.cwd();

export const LIB_DIR = import.meta.dir;

export const ROOT_DIR = LIB_DIR + '/..';
export const BUNDLED_DIR = ROOT_DIR + '/.out';
export const SOURCES_DIR = ROOT_DIR + '/src';

export const TIMING_MOD = LIB_DIR + '/timing/index.js';
export const TIMING_START = LIB_DIR + '/timing/start.js';

export const relativePath = (dir: string) => relative('.', dir);

export const scan = (pat: string, cwd: string) => [
  ...new Bun.Glob(pat).scanSync({
    cwd,
    absolute: true,
    followSymlinks: false
  })
];

export const tryWriteAsync = (path: string, content: string) =>
  writeFile(path, content, (err) => {
    if (err !== null)
      console.log('Failed to write file:', format.path(path));
    else
      console.log('File written successfully:', format.path(path));
  });

export const tryMkdirAsync = (path: string, success: () => any) => {
  mkdir(path, {
    recursive: true
  }, (err) => {
    if (err !== null && err.code === 'ENOENT') {
      console.log('Failed to create directory:', format.path(path));
      return;
    }

    console.log('Directory created:', format.path(path));
    success();
  });
};

export const tryRmAsync = (path: string) => {
  rm(path, {
    recursive: true,
  }, (err) => {
    if (err !== null && err.code === 'ENOENT') {
      console.log('Failed to remove:', format.path(path));
      return;
    }

    console.log('Remove directory successfully:', format.path(path));
  })
}

export const percentile = (arr: number[], p: number) => {
  const n = arr.length;

  const index = p * (n - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);

  if (upper >= n) return arr[lower];

  const weight = index - lower;
  return arr[lower] * (1 - weight) + arr[upper] * weight;
}

export const nsToMs = (value: number) => +(value / 1e6).toFixed(2);
export const bToKb = (value: number) => +(value / 1024).toFixed(2);

const RESULT_FILE = ROOT_DIR + '/result.json';
export const writeResult = async (tag: string, newResult: any) => {
  const json = await Bun.file(RESULT_FILE).json();
  json[tag] = newResult;
  return Bun.write(ROOT_DIR + '/result.json', JSON.stringify(json, null, 2));
}
