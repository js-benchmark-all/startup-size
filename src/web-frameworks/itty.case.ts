import { IttyRouter } from 'itty-router/IttyRouter';
import { withParams } from 'itty-router/withParams';

IttyRouter()
  .get('/', () => new Response('Hi'))
  .get('/user/:id', withParams, (c) => new Response(c.id))
  .post('/body', async (c) => Response.json(await c.json()))
  .fetch(new Request('http://127.0.0.1'));
