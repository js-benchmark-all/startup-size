import { now, gc, do_not_optimize } from 'mitata/src/lib.mjs';

export { now };

{
  // Opt now
  let v = 0;
  for (let i = 0; i < 1000; i++) v ^= now();
  do_not_optimize(v);

  // Preload undici
  do_not_optimize(new Request('http://127.0.0.1'));
  do_not_optimize(new Response());
  do_not_optimize(new Headers());

  gc();
}

export var start = now();
