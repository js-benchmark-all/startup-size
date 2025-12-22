import assertSimple from './assert-simple.spec.ts';
import { toJSONAssert } from 'stnl';
import schema from './stnl/schema.ts';

const assertJIT = toJSONAssert.compile(schema);

assertSimple('stnl (jit)', (o) => {
  if (!assertJIT(o)) throw new Error();
});
