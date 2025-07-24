import { Hono } from 'hono/quick';
import { PatternRouter } from 'hono/router/pattern-router';

await new Hono({ router: new PatternRouter() })
  .get('/', (c) => c.body('Hi'))
  .get('/user/:id', (c) => c.body(c.req.param('id')))
  .post('/body', async (c) => c.json(await c.req.json()))
  .fetch(new Request('http://127.0.0.1'));
