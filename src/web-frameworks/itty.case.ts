import { IttyRouter, withParams } from 'itty-router';

const raw = (text: string) => new Response(text);
IttyRouter()
  .get('/', () => raw('Hi'))
  .get('/user/:id', withParams, (c) => raw(c.id))
  .post('/body', async (c) => Response.json(c.json()))
  .fetch(new Request('http://127.0.0.1'));
