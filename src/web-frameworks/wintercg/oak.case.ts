import { Application } from '@oak/oak/application';
import { Router } from '@oak/oak/router';

const router = new Router()
  .get('/', (c) => {
    c.response.body = 'Hi';
  })
  .get('/user/:id', (c) => {
    c.response.body = c.params.id;
  })
  .post('/body', async (c) => {
    c.response.body = await c.request.body.json();
  });

new Application()
  .use(router.routes())
  // @ts-ignore
  .fetch(new Request('http://127.0.0.1'));
