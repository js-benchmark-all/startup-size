import { Type } from 'typebox';
import { Compile } from 'typebox/compile';

const schema = Type.Object({
  number: Type.Number(),
  negNumber: Type.Number(),
  maxNumber: Type.Number(),
  string: Type.String(),
  longString: Type.String(),
  boolean: Type.Boolean(),
  deeplyNested: Type.Object({
    foo: Type.String(),
    num: Type.Number(),
    bool: Type.Boolean(),
  }),
  items: Type.Array(Type.Number()),
});

export default Compile(schema);
