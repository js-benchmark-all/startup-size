import { IttyRouter, json, withParams } from 'itty-router';

export const app = IttyRouter()
  .get('/', () => new Response('Hi'))
  .get('/user/:id', withParams, (c) => new Response(c.id))
  .post('/body', (c) => c.json().then(json));
