import assertSimple from './assert-simple.spec.ts';
import checkAOT from './stnl/aot.ts';

assertSimple('stnl (aot)', (o) => {
  if (!checkAOT(o)) throw new Error();
});
