import { Hono } from 'hono/quick';
import { PatternRouter } from 'hono/router/pattern-router';

export const app = new Hono({ router: new PatternRouter() })
  .get('/', (c) => c.body('Hi'))
  .get('/user/:id', (c) => c.body(c.req.param('id')))
  .post('/body', async (c) => c.json(await c.req.json()));

app.fetch(new Request('http://127.0.0.1'));
