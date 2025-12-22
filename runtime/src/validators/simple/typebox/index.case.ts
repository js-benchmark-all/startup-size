import { register } from '../spec.ts';
import { Check } from './aot.ts';
import schema from './schema.ts';
import { Compile } from 'typebox/compile';

const assert = Compile(schema);
register('typebox (jit)', (o) => {
  if (!assert.Check(o)) throw new Error();
});

register('typebox (aot)', (o) => {
  if (!Check(o)) throw new Error();
});
