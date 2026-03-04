import { createRouter, insertItem } from '@mapl/router/method';
import type { Node } from '@mapl/router/tree/node';

import spec from './.spec.ts';

{
  type Handler = (() => string) | ((match: string[], paramMap: number[]) => string);

  // Compiler
  let HANDLERS!: [value: Handler, paramMap: number[]][];
  let PARAM_IDX!: number;

  const _compile = (node: Node<any>, paramMap: number[], skipFirstChar: boolean): string => {
    let str = '';
    let parts = 0;

    if (node[1] != null) {
      parts++;

      HANDLERS[PARAM_IDX++] = [node[1], paramMap];
      str += '|()$';
    }

    for (let i = 0, children = node[3]; i < children.length; i++) {
      parts++;
      str += '|' + _compile(children[i], paramMap, false);
    }

    if (node[4] != null) {
      parts++;

      str += '|([^/]+)';
      const newParamMap = paramMap.concat(PARAM_IDX++);

      const params = node[4];
      if (params[0] != null) {
        if (params[1] != null) {
          HANDLERS[PARAM_IDX++] = [params[1], newParamMap];
          str += '(?:()$|' + _compile(params[0], newParamMap, true) + ')';
        } else str += _compile(params[0], newParamMap, true);
      } else {
        HANDLERS[PARAM_IDX++] = [params[1], newParamMap];
        str += '()$';
      }
    }

    if (node[5] != null) {
      parts++;

      const newParamMap = paramMap.concat(PARAM_IDX++);
      HANDLERS[PARAM_IDX++] = [node[5], newParamMap];
      str += '|(.*)()$';
    }

    return (skipFirstChar ? '.' + node[0].slice(1).replace(/\//g, '\\/') : node[0].replace(/\//g, '\\/')) + (parts > 1 ? '(?:' + str.slice(1) + ')' : str.slice(1));
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

  const methods: string[] = router[0];
  const staticMaps: Map<string, Handler>[] = router[2];

  const regexps: RegExp[] = [];
  const stores: (typeof HANDLERS)[] = [];

  for (let i = 0, methodRouters = router[1]; i < methodRouters.length; i++) {
    const methodRouter = methodRouters[i];

    HANDLERS = [];
    PARAM_IDX = 1;

    regexps.push(new RegExp('^' + _compile(methodRouter, [], true)));
    stores.push(HANDLERS);

    //console.log(methods[i], regexps[i]);
  }

  spec('mapl (regexp)', (o) => {
    const id = methods.indexOf(o.method);
    if (id > -1) {
      const match = staticMaps[id].get(o.url);
      if (typeof match !== 'undefined')
        // @ts-ignore
        return match();

      const dmatch = regexps[id].exec(o.url);
      if (dmatch !== null) {
        const store = stores[id]![dmatch.indexOf('', 1)];
        return store[0](dmatch, store[1]);
      }
    }

    return '';
  });
}
