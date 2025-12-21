import { IttyRouter, json, withParams } from 'itty-router';

const raw = (text: string) => new Response(text);
export const app = IttyRouter()
  .get('/', () => raw('Hi'))
  .get('/user/:id', withParams, (c) => raw(c.id))
  .post('/body', async (c) => json(c.json()));

app.fetch(new Request('http://127.0.0.1'));
