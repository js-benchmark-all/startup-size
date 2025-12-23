import assertSimple from './assert-simple.spec.ts';
import * as v from 'valibot'

const Id = v.pipe(v.number(), v.integer(), v.minValue(0));
const DisplayName = v.optional(v.pipe(v.string(), v.minLength(3), v.maxLength(24)));

const schema = v.object({
  id: Id,
  displayName: DisplayName,
  health: v.pipe(v.number(), v.minValue(0), v.maxValue(100)),
  inventory: v.pipe(
    v.array(
      v.object({
        id: Id,
        displayName: DisplayName,
        tags: v.optional(v.array(v.string())),
      })
    ),
    v.maxLength(30)
  )
});

assertSimple('valibot', (o) => {
  if (!v.is(schema, o)) throw new Error();
});
