import pc from 'picocolors';

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

console.log('Runtime:', format.header(RUNTIME) + '\n');
