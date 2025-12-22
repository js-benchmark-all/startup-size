import { t } from 'stnl';

const DisplayName = t.string.concat([t.minLen(3), t.maxLen(24)]);
const Id = t.int.concat([t.min(0)]);

export default t.dict(
  {
    id: Id,
    health: t.float.concat([t.min(0), t.max(100)]),
    inventory: t
      .list(
        t.dict(
          {
            id: Id,
          },
          {
            displayName: DisplayName,
            tags: t.list(t.string),
          },
        ),
      )
      .concat([t.maxLen(30)]),
  },
  {
    displayName: DisplayName,
  },
);
