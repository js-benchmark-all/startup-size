import { compile, schema, number, string, boolean, array } from 'sury';

export default compile(
  schema({
    number: number,
    negNumber: number,
    maxNumber: number,
    string: string,
    longString: string,
    boolean: boolean,
    deeplyNested: {
      foo: string,
      num: number,
      bool: boolean,
    },
    items: array(number),
  }),
  'Any',
  'Assert',
  'Sync',
);
