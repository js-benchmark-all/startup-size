import { type Cases, defineCases } from '../../../config.ts';

export default defineCases((_runtime) => {
  const cases: Cases = {
    'arktype (jit)': 'arktype.ts',
    'effect/schema': 'effect-schema.ts',
    'stnl (jit)': 'stnl/jit.ts',
    'sury (jit)': 'sury.ts',
    'typebox (jit)': 'typebox/jit.ts',
    'typescript (jit)': 'typebox/script-jit.ts',
    valibot: 'valibot.ts',
    zod: 'zod/index.ts',
    'zod/mini': 'zod/mini.ts'
  };

  return { cases };
});
