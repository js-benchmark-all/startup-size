import assertSimple from './assert-simple.spec.ts';
import { Schema } from 'effect';

const Id = Schema.Int.pipe(Schema.greaterThanOrEqualTo(0));
const DisplayName = Schema.optional(Schema.String.pipe(Schema.minLength(3), Schema.maxLength(24)));

const assert = Schema.is(
  Schema.Struct({
    id: Id,
    displayName: DisplayName,
    health: Schema.Number.pipe(Schema.greaterThanOrEqualTo(0), Schema.lessThanOrEqualTo(100)),
    inventory: Schema.Array(
      Schema.Struct({
        id: Id,
        displayName: DisplayName,
        tags: Schema.optional(Schema.Array(Schema.String)),
      }),
    ).pipe(Schema.maxItems(30)),
  }),
);

assertSimple('effect-schema', (o) => {
  if (!assert(o)) throw new Error();
});
