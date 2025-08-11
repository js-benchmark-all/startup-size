import { IttyRouter, withParams } from 'itty-router';

IttyRouter()
  .get('/', () => new Response('Hi'))
  .get('/user/:id', withParams, (c) => new Response(c.id))
  .post('/body', async (c) => Response.json(await c.json()))
  .fetch(new Request('http://127.0.0.1'));
