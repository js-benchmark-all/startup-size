import { RegExpRouter } from 'hono/router/reg-exp-router';
import spec from './.spec.ts';

{
  type Handler = (paramArray: string[], paramIndexMap: Record<string, number>) => string;

  const router = new RegExpRouter<Handler>();

  router.add('GET', '/user', (_, _1) => '0');
  router.add('GET', '/user/comments', (_, _1) => '1');
  router.add('GET', '/user/avatar', (_, _1) => '2');
  router.add('GET', '/user/lookup/username/:a', (arr, map) => '3' + arr[map.a]);
  router.add('GET', '/user/lookup/email/:a', (arr, map) => '4' + arr[map.a]);
  router.add('GET', '/event/:a', (arr, map) => '5' + arr[map.a]);
  router.add('GET', '/event/:a/comments', (arr, map) => '6' + arr[map.a]);
  router.add('POST', '/event/:a/comment', (arr, map) => '7' + arr[map.a]);
  router.add('GET', '/map/:a/event', (arr, map) => '8' + arr[map.a]);
  router.add('GET', '/status', (_, _1) => '9');
  router.add('GET', '/very/deeply/nested/route/hello/there', (_, _1) => '10');
  router.add('GET', '/static/:a{.+}', (arr, map) => '11' + arr[map.a]);

  spec('hono (regexp)', (o) => {
    const result = router.match(o.method, o.url);
    return result[0].length > 0
      ? result[0][0][0](result[1]!, result[0][0][1] as Record<string, number>)
      : '';
  });
}
