 import { TypeCompiler } from '@sinclair/typebox/compiler';
 import { Type } from '@sinclair/typebox';

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

export default Function(TypeCompiler.Code(schema, []))();
