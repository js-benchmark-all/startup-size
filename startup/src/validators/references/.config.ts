import { type Cases, defineCases } from '../../../config.ts';

export default defineCases((_runtime) => {
  const cases: Cases = {
    arktype: 'arktype.ts',
    'stnl (jit)': 'stnl/jit.ts',
    'typebox (jit)': 'typebox/jit.ts',
    'typescript (jit)': 'typebox/script-jit.ts',
  };

  return { cases };
});
