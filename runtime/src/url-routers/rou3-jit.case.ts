import { createRouter, addRoute } from 'rou3';
import { compileRouter } from 'rou3/compiler';
import spec from './.spec.ts';

type Handler = (params: Record<string, string>) => string;

const router = createRouter<Handler>();

addRoute(router, 'GET', '/user', () => '0');
addRoute(router, 'GET', '/user/comments', () => '1');
addRoute(router, 'GET', '/user/avatar', () => '2');
addRoute(router, 'GET', '/user/lookup/username/:a', (map) => '3' + map.a);
addRoute(router, 'GET', '/user/lookup/email/:a', (map) => '4' + map.a);
addRoute(router, 'GET', '/event/:a', (map) => '5' + map.a);
addRoute(router, 'GET', '/event/:a/comments', (map) => '6' + map.a);
addRoute(router, 'POST', '/event/:a/comment', (map) => '7' + map.a);
addRoute(router, 'GET', '/map/:a/event', (map) => '8' + map.a);
addRoute(router, 'GET', '/status', () => '9');
addRoute(router, 'GET', '/very/deeply/nested/route/hello/there', () => '10');
addRoute(router, 'GET', '/static/**:a', (map) => '11' + map.a);

const match = compileRouter(router);
spec('rou3 (jit)', (o) => {
  const result = match(o.method, o.url);
  return typeof result === 'undefined'
    ? ''
    : typeof result.params === 'undefined'
      ? // @ts-ignore
        result.data()
      : result.data(result.params);
});
