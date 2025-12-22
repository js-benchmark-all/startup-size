import schema from './schema.ts';
import { Code } from 'typebox/compile';

await Bun.write(import.meta.dir + '/aot.ts', '// @ts-nocheck\n' + Code(schema).Code);
