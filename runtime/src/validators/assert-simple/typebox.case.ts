import { register } from './spec.ts';
import { Check } from './typebox/aot.ts';
import schema from './typebox/schema.ts';
import { Compile } from 'typebox/compile';
import Value from 'typebox/value';

const assert = Compile(schema);
register('typebox (jit)', (o) => {
  if (!assert.Check(o)) throw new Error();
});

register('typebox (aot)', (o) => {
  if (!Check(o)) throw new Error();
});

register('typebox', (o) => {
  if (!Value.Check(schema, o)) throw new Error();
});
