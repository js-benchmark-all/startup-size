import { register } from './spec.ts';
import { toJSONAssert } from 'stnl';
import schema from './stnl/schema.ts';
import assertAOT from './stnl/aot.ts';

const assertJIT = toJSONAssert.compile(schema);

register('stnl (jit)', (o) => {
  if (!assertJIT(o)) throw new Error();
});

register('stnl (aot)', (o) => {
  if (!assertAOT(o)) throw new Error();
});
