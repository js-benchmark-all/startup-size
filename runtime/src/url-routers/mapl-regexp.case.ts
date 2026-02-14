import { createRouter, insertItem } from '@mapl/router/method';
import { createStaticMap } from '@mapl/router/path';
import type { Node } from '@mapl/router/tree/node';

import spec from './.spec.ts';

{
  type Handler = (() => string) | ((match: string[], paramMap: number[]) => string);

  // Compiler
  let HANDLERS!: [value: Handler, paramMap: number[]][];
  let PARAM_IDX!: number;

  const _compile = (node: Node<any>, paramMap: number[]): string => {
    let str = '';
    let parts = 0;

    if (node[1] != null) {
      parts++;

      HANDLERS[PARAM_IDX++] = [node[1], paramMap];
      str += '|($)';
    }

    if (node[2] != null) {
      parts++;

      for (const key in node[2]) str += '|' + _compile(node[2][key], paramMap);
    }

    if (node[3] != null) {
      parts++;

      str += '|([^/]+)';
      const newParamMap = paramMap.concat(PARAM_IDX++);

      const params = node[3];
      if (params[0] != null) {
        if (params[1] != null) {
          HANDLERS[PARAM_IDX++] = [params[1], newParamMap];
          str += '(?:($)|' + _compile(params[0], newParamMap) + ')';
        } else str += _compile(params[0], newParamMap);
      } else {
        HANDLERS[PARAM_IDX++] = [params[1], newParamMap];
        str += '($)';
      }
    }

    if (node[4] != null) {
      parts++;

      const newParamMap = paramMap.concat(PARAM_IDX++);
      HANDLERS[PARAM_IDX++] = [node[4], newParamMap];
      str += '|(.*$)()';
    }

    return node[0].replace(/\//g, '\\/') + (parts > 1 ? '(?:' + str.slice(1) + ')' : str.slice(1));
  };

  const router = createRouter<Handler>();

  const insert = (method: string, path: string, fn: Handler) => {
    insertItem(router, method, path, fn);
  };

  insert('GET', '/user', () => '0');
  insert('GET', '/user/comments', () => '1');
  insert('GET', '/user/avatar', () => '2');
  insert('GET', '/user/lookup/username/*', (match, params) => '3' + match[params[0]]);
  insert('GET', '/user/lookup/email/*', (match, params) => '4' + match[params[0]]);
  insert('GET', '/event/*', (match, params) => '5' + match[params[0]]);
  insert('GET', '/event/*/comments', (match, params) => '6' + match[params[0]]);
  insert('POST', '/event/*/comment', (match, params) => '7' + match[params[0]]);
  insert('GET', '/map/*/event', (match, params) => '8' + match[params[0]]);
  insert('GET', '/status', () => '9');
  insert('GET', '/very/deeply/nested/route/hello/there', () => '10');
  insert('GET', '/static/**', (match, params) => '11' + match[params[0]]);

  const methods: string[] = [];
  const staticMaps: Map<string, Handler>[] = [];
  const regexps: (RegExp | null)[] = [];
  const stores: (typeof HANDLERS | null)[] = [];

  for (const method in router) {
    const methodRouter = router[method];

    methods.push(method);
    staticMaps.push(createStaticMap(methodRouter));

    if (methodRouter[0] != null) {
      HANDLERS = [];
      PARAM_IDX = 1;

      regexps.push(new RegExp('^' + _compile(methodRouter[0], [])));
      stores.push(HANDLERS);
    } else {
      regexps.push(null);
      stores.push(null);
    };
  }

  spec('mapl (regexp)', (o) => {
    const id = methods.indexOf(o.method)
    if (id > -1) {
      const match = staticMaps[id].get(o.url);
      if (match != null)
        // @ts-ignore
        return match();

      if (regexps[id] !== null) {
        const dmatch = regexps[id].exec(o.url);
        if (dmatch !== null) {
          const store = stores[id]![dmatch.indexOf('', 1)];
          return store[0](dmatch, store[1]);
        }
      }
    }

    return '';
  });
}
