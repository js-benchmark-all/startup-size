import Elysia from 'elysia';

export const app = new Elysia({ aot: false })
  .get('/', 'Hi')
  .get('/user/:id', (c) => c.params.id)
  .post('/body', (c) => c.body);

app.fetch(new Request('http://127.0.0.1'));
