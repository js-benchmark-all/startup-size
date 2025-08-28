import * as S from 'sury';

export default S.compile(
  S.schema({
    number: S.number,
    negNumber: S.number,
    maxNumber: S.number,
    string: S.string,
    longString: S.string,
    boolean: S.boolean,
    deeplyNested: {
      foo: S.string,
      num: S.number,
      bool: S.boolean,
    },
    items: S.array(S.number),
  }),
  'Any',
  'Assert',
  'Sync',
);
