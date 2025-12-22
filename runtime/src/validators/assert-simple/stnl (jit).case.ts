import { register } from './spec.ts';
import { toJSONAssert } from 'stnl';
import schema from './stnl/schema.ts';

const assertJIT = toJSONAssert.compile(schema);

register('stnl (jit)', (o) => {
  if (!assertJIT(o)) throw new Error();
});
