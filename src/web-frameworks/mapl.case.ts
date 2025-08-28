import { router, compile, handle } from '@mapl/web';

compile(
  router([], [
    handle.get('/', () => 'Hi'),
    handle.get('/user/*', (id) => id),
    handle.post('/body', async (c) => c.req.json(), handle.json)
  ])
)(new Request('http://127.0.0.1'));
