import * as S from 'sury';
import { register } from './spec.ts';

interface Type {
  // min: 0, integer
  id: number;
  // minLength: 3, maxLength: 24
  displayName?: string;
  // min: 0, max: 100
  health: number;
  // maxLength: 30
  inventory: {
    // min: 0, integer
    id: number;
    // minLength: 3, maxLength: 24
    displayName?: string;
    tags?: string[];
  }[];
}

const DisplayName = S.optional(S.min(S.max(S.string, 24), 3));
const Id = S.min(S.int32, 0);

register(
  'sury (jit)',
  S.compile(
    S.schema({
      id: Id,
      displayName: DisplayName,
      health: S.min(S.max(S.number, 100), 0),
      inventory: S.max(
        S.array(
          S.schema({
            id: Id,
            displayName: DisplayName,
            tags: S.optional(S.array(S.string)),
          }),
        ),
        30,
      ),
    }),
    'Any',
    'Assert',
    'Sync',
  ),
);
