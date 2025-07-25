import { Schema } from '@effect/schema';

export default Schema.is(
  Schema.Struct({
    number: Schema.Number,
    negNumber: Schema.Number,
    maxNumber: Schema.Number,
    string: Schema.String,
    longString: Schema.String,
    boolean: Schema.Boolean,
    deeplyNested: Schema.Struct({
      foo: Schema.String,
      num: Schema.Number,
      bool: Schema.Boolean,
    }),
    items: Schema.Array(Schema.Number),
  }),
);
