import { register } from './spec.ts';
import assertAOT from './stnl/aot.ts';

register('stnl (aot)', (o) => {
  if (!assertAOT(o)) throw new Error();
});
