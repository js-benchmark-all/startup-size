import { type Cases, defineCases } from '../../../config.ts';

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

    // @mapl/web
    '@mapl/web (jit)': 'mapl/jit.ts',
  };

  return { cases };
});
