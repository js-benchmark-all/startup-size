import { toJSONCheck } from 'stnl';
import schema from './schema.ts';

await Bun.write(
  import.meta.dir + '/aot.ts',
  `// @ts-nocheck\nlet d;${toJSONCheck.code(schema, 'd' as any)}export default d as ((o: any) => boolean)`,
);
