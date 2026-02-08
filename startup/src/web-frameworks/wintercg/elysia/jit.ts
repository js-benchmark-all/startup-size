import Elysia from 'elysia';

export const app = new Elysia()
  .get('/', 'Hi')
  .get('/user/:id', (c) => c.params.id)
  .post('/body', (c) => c.body)
  .compile();
