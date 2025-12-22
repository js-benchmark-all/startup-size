import { Type } from 'typebox';

const DisplayName = Type.Optional(
  Type.String({
    minLength: 3,
    maxLength: 24,
  }),
);
const Id = Type.Integer({
  minimum: 0,
});

export default Type.Object({
  id: Id,
  displayName: DisplayName,
  health: Type.Number({
    minimum: 0,
    maximum: 100,
  }),
  inventory: Type.Array(
    Type.Object({
      id: Id,
      displayName: DisplayName,
      tags: Type.Array(Type.String()),
    }),
    {
      maxLength: 30,
    },
  ),
});
