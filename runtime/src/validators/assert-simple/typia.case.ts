import { register } from './spec.ts';
import assert from './typia/schema.js';

register('typia (aot)', (o) => {
  if (!assert(o)) throw new Error();
});
