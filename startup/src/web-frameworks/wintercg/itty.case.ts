import { IttyRouter, json, withParams } from 'itty-router';

export const app = IttyRouter()
  .get('/', () => new Response('Hi'))
  .get('/user/:id', withParams, (c) => new Response(c.id))
  .post('/body', async (c) => json(c.json()));

app.fetch(new Request('http://127.0.0.1'));
