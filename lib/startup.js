import { now, gc } from 'mitata/src/lib.mjs';

export { now };

{
  // Deopt now
  let v = 0;
  for (let i = 0; i < 1000; i++) v ^= now();
  if (v === 123456789) console.log();

  // Preload undici
  let _ = new Request('http://localhost');
  let _1 = new Response();
  let _2 = new Headers();

  gc();
}

export var start = now();
