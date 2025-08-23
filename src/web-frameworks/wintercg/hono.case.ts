import { Hono } from 'hono';

new Hono()
  .get('/', (c) => c.body('Hi'))
  .get('/user/:id', (c) => c.body(c.req.param('id')))
  .post('/body', async (c) => c.json(await c.req.json()))
  .fetch(new Request('http://127.0.0.1'));
