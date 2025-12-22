import assertSimple from './assert-simple.spec.ts';
import schema from './typebox/schema.ts';
import Value from 'typebox/value';

assertSimple('typebox', (o) => {
  if (!Value.Check(schema, o)) throw new Error();
});
