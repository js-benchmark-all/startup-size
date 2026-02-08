import assertSimple from './assert-simple.spec.ts';
import { Check } from './typebox/aot.ts';

assertSimple('typebox (aot)', (o) => {
  if (!Check(o)) throw new Error();
});
