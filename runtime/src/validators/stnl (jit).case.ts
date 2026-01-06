import assertSimple from './assert-simple.spec.ts';
import { toJSONCheck } from 'stnl';
import schema from './stnl/schema.ts';

const checkJIT = toJSONCheck.compile(schema);

assertSimple('stnl (jit)', (o) => {
  if (!checkJIT(o)) throw new Error();
});
