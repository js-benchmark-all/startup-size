import { Type } from 'typebox';
import { Compile } from 'typebox/compile';

export default Compile(
  Type.Script(`{
    number: number;
    negNumber: number;
    maxNumber: number;
    string: string;
    longString: string;
    boolean: boolean;
    deeplyNested: {
      foo: string;
      num: number;
      bool: boolean;
    };
    items: number[];
  }`),
);
