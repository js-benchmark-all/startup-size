import { type Cases, defineCases } from '../../../config.ts';

export default defineCases((runtime) => {
  const cases: Cases = {
    elysia: 'elysia/dynamic.ts',
    'elysia (jit)': 'elysia/jit.ts',
    hono: 'hono/base.ts',
    'hono (quick)': 'hono/quick.ts',
    'hono (tiny)': 'hono/tiny.ts',
    'itty-router': 'itty-router.ts',
    'mapl (jit)': runtime.startsWith('bun')
      ? 'mapl/jit-bun.ts'
      : runtime.startsWith('deno')
        ? 'mapl/jit-deno.ts'
        : 'mapl/jit.ts',
  };

  return { cases };
});
