import pc from 'picocolors';
import { relativePath } from './utils.ts';

const createUnitFormat = (units: string[], sep: number) => (n: number) => {
  let i = 0;
  while (n >= sep && i < units.length - 1) {
    i++;
    n /= sep;
  }
  return pc.yellowBright(n.toFixed(2) + units[i]);
};

export const time = createUnitFormat(['ns', 'us', 'ms', 's'], 1000);
export const byte = createUnitFormat(['b', 'kb', 'mb'], 1024);
export const name = (name: string) => pc.bold(pc.cyan(name));
export const multiplier = (x: number) => pc.greenBright(x.toFixed(2) + 'x');
export const header = pc.bold;
export const path = (path: string) => pc.bold(relativePath(path));
export const success = pc.greenBright;
export const error = pc.redBright;
