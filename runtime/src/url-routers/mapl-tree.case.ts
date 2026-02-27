import { createRouter, insertItem } from '@mapl/router/method';
import type { Node } from '@mapl/router/tree/node';
import { match, init, PARAMS } from '@mapl/router/tree/match';

import spec from './.spec.ts';

{
  type Handler = (() => string) | ((params: string[]) => string);

  const router = createRouter<Handler>();

  const insert = (method: string, path: string, fn: Handler) => {
    insertItem(router, method, path, fn);
  };

  insert('GET', '/user', () => '0');
  insert('GET', '/user/comments', () => '1');
  insert('GET', '/user/avatar', () => '2');
  insert('GET', '/user/lookup/username/*', (params) => '3' + params[0]);
  insert('GET', '/user/lookup/email/*', (params) => '4' + params[0]);
  insert('GET', '/event/*', (params) => '5' + params[0]);
  insert('GET', '/event/*/comments', (params) => '6' + params[0]);
  insert('POST', '/event/*/comment', (params) => '7' + params[0]);
  insert('GET', '/map/*/event', (params) => '8' + params[0]);
  insert('GET', '/status', () => '9');
  insert('GET', '/very/deeply/nested/route/hello/there', () => '10');
  insert('GET', '/static/**', (params) => '11' + params[0]);

  const methods: string[] = router[0];
  const staticMaps: Map<string, Handler>[] = router[2];
  const nodes: Node<Handler>[] = router[1];

  spec('mapl (tree)', (o) => {
    const id = methods.indexOf(o.method);
    if (id > -1) {
      const smatch = staticMaps[id].get(o.url);
      if (typeof smatch !== 'undefined')
        // @ts-ignore
        return smatch();

      init(o.url);
      const dmatch = match(nodes[id], 1);
      if (dmatch != null) return dmatch(PARAMS);
    }

    return '';
  });
}
