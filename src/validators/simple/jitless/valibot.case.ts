import { array, assert, boolean, number, object, string } from 'valibot';

export default assert.bind(
  null,
  object({
    number: number(),
    negNumber: number(),
    maxNumber: number(),
    string: string(),
    longString: string(),
    boolean: boolean(),
    deeplyNested: object({
      foo: string(),
      num: number(),
      bool: boolean(),
    }),
    items: array(number()),
  })
);
