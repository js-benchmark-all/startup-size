import pc from 'picocolors';
import { relative } from 'node:path/posix';
import { BYTE, convertAuto, TIME } from './units.ts';
import { math } from './math.ts';

export const fmt = {
  duration: (value: number) => pc.yellowBright(convertAuto(TIME, value)),
  percentage: (value: number) => pc.yellowBright(math.truncate(value * 100) + '%'),
  byte: (value: number) => pc.yellowBright(convertAuto(BYTE, value)),
  h2: (name: string) => pc.bold(pc.cyan(name)),
  multiplier: (x: number) => pc.greenBright(math.truncate(x) + 'x'),
  h1: pc.bold,
  success: pc.greenBright,
  error: pc.redBright,
  relativePath: (abs: string) => pc.italic(pc.underline(relative('.', abs))),
};
