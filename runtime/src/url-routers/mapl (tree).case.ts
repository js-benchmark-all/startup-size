import { createRouter, insertItem } from '@mapl/router/method';
import { createStaticMap } from '@mapl/router/path';
import type { Node } from '@mapl/router/tree/node';

import spec from './.spec.ts';

{
  type Handler = (() => string) | ((params: string[]) => string);

  const _matchNode = (
    node: Node<Handler>,
    path: string,
    params: string[],
    start: number,
  ): Handler | null => {
    const part = node[0];
    const partLen = part.length;

    // Only check the part if its length is > 1 since the parent has
    // already checked that the url matches the first character
    if (partLen === 1 || path.startsWith(part, start)) {
      start += partLen;

      // Reached the end of the URL
      if (start === path.length) return node[1];

      // Check the next children node
      if (node[2] != null) {
        const child = node[2][path.charCodeAt(start)];
        if (child != null) {
          const match = _matchNode(child, path, params, start);
          if (match != null) return match;
        }
      }

      // Check for parameters
      if (node[3] != null) {
        const endIdx = path.indexOf('/', start);

        if (endIdx === -1) {
          if (node[3][1] != null) {
            params.push(path.slice(start));
            return node[3][1];
          }
        } else if (endIdx > start && node[3][0] != null) {
          params.push(path.slice(start, endIdx));

          const match = _matchNode(node[3][0], path, params, endIdx);
          if (match != null) return match;

          params.pop();
        }
      }

      // Wildcard
      if (node[4] != null) {
        params.push(path.slice(start));
        return node[4];
      }
    }

    return null;
  };

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

  const methodMap: Map<string, [Map<string, Handler>, Node<Handler>] | [Map<string, Handler>]> =
    new Map();
  for (const method in router) {
    const methodRouter = router[method];
    methodMap.set(
      method,
      methodRouter[0] == null
        ? [createStaticMap(methodRouter)]
        : [createStaticMap(methodRouter), methodRouter[0]],
    );
  }

  spec('mapl (tree)', (o) => {
    const tmp = methodMap.get(o.method);
    if (typeof tmp !== 'undefined') {
      const match = tmp[0].get(o.url);
      if (match != null)
        // @ts-ignore
        return match();

      if (tmp.length > 1) {
        const params: string[] = [];
        const dmatch = _matchNode(tmp[1]!, o.url, params, 0);
        if (dmatch != null) return dmatch(params);
      }
    }

    return '';
  });
}
