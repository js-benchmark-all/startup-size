import pc from 'picocolors';
import { relative } from 'node:path/posix';
import { BYTE, TIME, type UnitData } from './units.ts';

const createUnitFormat = ({ units, sep }: UnitData) => (n: number) => {
  let i = 0;
  while (n >= sep && i < units.length - 1) {
    i++;
    n /= sep;
  }
  return pc.yellowBright(+n.toFixed(2) + units[i]);
};

export const fmt = {
  duration: createUnitFormat(TIME),
  percentage: (value: number) => pc.yellowBright((value * 100).toFixed(2) + '%'),
  byte: createUnitFormat(BYTE),
  h2: (name: string) => pc.bold(pc.cyan(name)),
  multiplier: (x: number) => pc.greenBright(x.toFixed(2) + 'x'),
  h1: pc.bold,
  success: pc.greenBright,
  error: pc.redBright,
  relativePath: (abs: string) => pc.italic(pc.underline(relative('.', abs))),
};
