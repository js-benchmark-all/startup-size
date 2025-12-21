import { register } from './spec.ts';
import { Type } from 'typebox';
import { Compile } from 'typebox/compile';

const DisplayName = Type.Optional(
  Type.String({
    minLength: 3,
    maxLength: 24
  })
);
const Id = Type.Integer({
  minimum: 0
});

const assert = Compile(
  Type.Object({
    id: Id,
    displayName: DisplayName,
    health: Type.Number({
      minimum: 0,
      maximum: 100
    }),
    inventory: Type.Array(
      Type.Object({
        id: Id,
        displayName: DisplayName,
        tags: Type.Array(Type.String())
      }),
      {
        maxLength: 30
      }
    )
  })
);

register('typebox (jit)', (o) => {
  if (!assert.Check(o))
    throw new Error();
});
