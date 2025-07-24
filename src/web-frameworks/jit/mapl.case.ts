import { router, compile, handle } from '@mapl/web';

await compile(
  router([], [
    handle.get('/', () => 'Hi'),
    handle.get('/user/*', (id) => id),
    handle.post('/body', async (c) => c.req.json())
  ])
)(new Request('http://127.0.0.1'));
