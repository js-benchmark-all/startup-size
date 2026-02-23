import { now, gc } from './startup-lib.js';
export { now };

gc();
export var start1 = now(), start2 = now();
