import { now, gc, side_effect } from './startup-lib.js';
export { now };

{
  side_effect(new Response());
  side_effect(new Request('http://127.0.0.1:3000'));
  side_effect(new Headers());
}

gc();
export var start = now();
