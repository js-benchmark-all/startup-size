import { t, build } from 'stnl';

export default build.json.assert(
  t.dict({
    number: t.float,
    negNumber: t.float,
    maxNumber: t.float,
    string: t.string,
    longString: t.string,
    boolean: t.bool,
    deeplyNested: t.dict({
      foo: t.string,
      num: t.float,
      bool: t.bool,
    }),
    items: t.list(t.float),
  }),
);
