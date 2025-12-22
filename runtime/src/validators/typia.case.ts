import assertSimple from './assert-simple.spec.ts';
import assert from './typia/schema.js';

assertSimple('typia (aot)', (o) => {
  if (!assert(o)) throw new Error();
});
