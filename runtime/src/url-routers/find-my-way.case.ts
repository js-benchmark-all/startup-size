import createRouter from 'find-my-way';
import spec from './.spec.ts';

{
  const router = createRouter({
    defaultRoute: () => '',
  });

  router.on('GET', '/user', (_, _1, _2) => '0');
  router.on('GET', '/user/comments', (_, _1, _2) => '1');
  router.on('GET', '/user/avatar', (_) => '2');
  router.on('GET', '/user/lookup/username/:a', (_, _1, map) => '3' + map.a);
  router.on('GET', '/user/lookup/email/:a', (_, _1, map) => '4' + map.a);
  router.on('GET', '/event/:a', (_, _1, map) => '5' + map.a);
  router.on('GET', '/event/:a/comments', (_, _1, map) => '6' + map.a);
  router.on('POST', '/event/:a/comment', (_, _1, map) => '7' + map.a);
  router.on('GET', '/map/:a/event', (_, _1, map) => '8' + map.a);
  router.on('GET', '/status', (_, _1, _2) => '9');
  router.on('GET', '/very/deeply/nested/route/hello/there', (_, _1, _2) => '10');
  router.on('GET', '/static/*', (_, _1, map) => '11' + map['*']);

  spec('find-my-way', (o) => router.lookup(o as any, null as any));
}
