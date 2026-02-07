import { now, gc, do_not_optimize } from 'mitata/src/lib.mjs';

export { now };

{
  // Opt now
  let v = 0;
  for (let i = 0; i < 1000; i++) v ^= now();
  do_not_optimize(v);
}

gc();
export var start = now();
