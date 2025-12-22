import assertSimple from './assert-simple.spec.ts';
import assertAOT from './stnl/aot.ts';

assertSimple('stnl (aot)', (o) => {
  if (!assertAOT(o)) throw new Error();
});
