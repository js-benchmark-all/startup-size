import Elysia from 'elysia';

new Elysia()
  .get('/', 'Hi')
  .get('/user/:id', (c) => c.params.id)
  .post('/body', (c) => c.body, { type: 'json' })
  .fetch(new Request('http://127.0.0.1'));
