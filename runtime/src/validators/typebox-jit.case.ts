import assertSimple from './assert-simple.spec.ts';
import schema from './typebox/schema.ts';
import { Compile } from 'typebox/compile';

const assert = Compile(schema);
assertSimple('typebox (jit)', (o) => {
  if (!assert.Check(o)) throw new Error();
});
