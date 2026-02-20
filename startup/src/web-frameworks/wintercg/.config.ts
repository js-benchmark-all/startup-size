import { type Cases, defineCases } from '../../../config.ts';

await Promise.all([import('./mapl/.build.ts')]);

export default defineCases((runtime) => {
  const cases: Cases = {
    // elysia
    elysia: 'elysia/dynamic.ts',
    'elysia (jit)': 'elysia/jit.ts',

    // hono
    hono: 'hono/base.ts',
    'hono/quick': 'hono/quick.ts',
    'hono/tiny': 'hono/tiny.ts',

    // itty-router
    'itty-router': 'itty-router.ts',

    // mapl
    'mapl (jit)': runtime.startsWith('bun')
      ? 'mapl/jit-bun.ts'
      : runtime.startsWith('deno')
        ? 'mapl/jit-deno.ts'
        : 'mapl/jit.ts',
    'mapl (aot)': runtime.startsWith('bun')
      ? 'mapl/aot-bun.ts'
      : runtime.startsWith('deno')
        ? 'mapl/aot-deno.ts'
        : 'mapl/aot.ts',
  };

  return { cases };
});
