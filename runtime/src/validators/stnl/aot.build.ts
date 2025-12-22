import { toJSONAssert } from 'stnl';
import schema from './schema.ts';

await Bun.write(
  import.meta.dir + '/aot.ts',
  `// @ts-nocheck\nexport default (()=>{${toJSONAssert.code(schema)}})()`,
);
