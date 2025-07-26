import pc from 'picocolors';
import { mkdir, writeFile } from 'node:fs';

export const RUNTIME = globalThis.Bun
  ? `bun_${process.versions.bun}`
  : `node_${process.versions.node}`;

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
  success: pc.greenBright,
  error: pc.redBright,
};

export const tryWriteAsync = (path: string, content: string) =>
  writeFile(path, content, (err) => {
    if (err !== null)
      console.log('Failed to write file:', format.header(path));
    else
      console.log('File written successfully:', format.header(path));
  });

export const tryMkdirAsync = (path: string, success: () => any) => {
  mkdir(path, (err) => {
    if (err !== null && err.code === 'ENOENT') {
      console.log('Failed to create directory:', format.header(path));
      return;
    }

    console.log('Directory created:', format.header(path));
    success();
  });
};
