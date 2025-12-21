import { array, boolean, number, object, string } from 'zod/mini';

export default object({
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
});
