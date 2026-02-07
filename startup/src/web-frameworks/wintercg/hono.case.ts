import { Hono } from 'hono';
import { RegExpRouter } from 'hono/router/reg-exp-router';

export const app = new Hono({ router: new RegExpRouter() })
  .get('/', (c) => c.body('Hi'))
  .get('/user/:id', (c) => c.body(c.req.param('id')))
  .post('/body', async (c) => c.json(await c.req.json()));
