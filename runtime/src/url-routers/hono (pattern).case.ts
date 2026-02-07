import { PatternRouter } from 'hono/router/pattern-router';
import spec from './.spec.ts';

{
  type Handler = (params: Record<string, string>) => string;

  const router = new PatternRouter<Handler>();

  router.add('GET', '/user', (_) => '0');
  router.add('GET', '/user/comments', (_) => '1');
  router.add('GET', '/user/avatar', (_) => '2');
  router.add('GET', '/user/lookup/username/:a', (map) => '3' + map.a);
  router.add('GET', '/user/lookup/email/:a', (map) => '4' + map.a);
  router.add('GET', '/event/:a', (map) => '5' + map.a);
  router.add('GET', '/event/:a/comments', (map) => '6' + map.a);
  router.add('POST', '/event/:a/comment', (map) => '7' + map.a);
  router.add('GET', '/map/:a/event', (map) => '8' + map.a);
  router.add('GET', '/status', (_) => '9');
  router.add('GET', '/very/deeply/nested/route/hello/there', (_) => '10');
  router.add('GET', '/static/:a{.+}', (map) => '11' + map.a);

  spec('hono (pattern)', (o) => {
    const result = router.match(o.method, o.url);
    return result[0].length > 0 ? result[0][0][0](result[0][0][1] as Record<string, string>) : '';
  });
}
