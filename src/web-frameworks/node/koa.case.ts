import Koa from 'koa';
import Router from '@koa/router';
import { bodyParser } from '@koa/bodyparser';

const router = new Router()
  .get('/', (c) => {
    c.body = 'Hi';
  })
  .get('/user/:id', (c) => {
    c.body = c.params.id;
  })
  .post('/body', bodyParser(), (c) => {
    c.body = c.request;
  });

new Koa().use(router.routes());