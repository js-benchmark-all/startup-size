import { register } from './spec.ts';
import { Check } from './typebox/aot.ts';

register('typebox (aot)', (o) => {
  if (!Check(o)) throw new Error();
});
