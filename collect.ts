import * as utils from './lib/utils.ts';
import { basename } from 'node:path';

const res: Record<string, any> = {};
const list: Promise<any>[] = [];

await Promise.all(
  [...new Bun.Glob('*.json').scanSync(utils.ALL_RESULTS)]
    .map(async (name) => {
      const mod = await import(utils.ALL_RESULTS + name);
      res[basename(name, '.json')] = mod.default;
    })
);

// Result for displaying
Bun.write(utils.ALL_RESULTS + 'index.json', JSON.stringify(res));
