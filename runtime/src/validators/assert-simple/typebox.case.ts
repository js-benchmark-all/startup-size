import { register } from './spec.ts';
import schema from './typebox/schema.ts';
import Value from 'typebox/value';

register('typebox', (o) => {
  if (!Value.Check(schema, o)) throw new Error();
});
