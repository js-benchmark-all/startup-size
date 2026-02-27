import {
  type Scope,
  declareLocal,
  injectExternal,
  getDependency,
  exportScope,
} from 'runtime-compiler';

import { createRouter, insertItem } from '@mapl/router/method';
import compile from '@mapl/router/method/compiler';
import { PARAMS, PATH } from '@mapl/router/constants';

import spec from './.spec.ts';

{
  const scope: Scope = ['', 0];
  const router = createRouter<string>();

  const insert = (method: string, path: string, fn: (...args: string[]) => string) => {
    let str = `return ${declareLocal(scope, injectExternal(fn))}(`;
    for (let i = 0; i < fn.length; i++) str += PARAMS + i + ',';
    insertItem(router, method, path, str + ')');
  };

  insert('GET', '/user', () => '0');
  insert('GET', '/user/comments', () => '1');
  insert('GET', '/user/avatar', () => '2');
  insert('GET', '/user/lookup/username/*', (username) => '3' + username);
  insert('GET', '/user/lookup/email/*', (email) => '4' + email);
  insert('GET', '/event/*', (id) => '5' + id);
  insert('GET', '/event/*/comments', (id) => '6' + id);
  insert('POST', '/event/*/comment', (id) => '7' + id);
  insert('GET', '/map/*/event', (location) => '8' + location);
  insert('GET', '/status', () => '9');
  insert('GET', '/very/deeply/nested/route/hello/there', () => '10');
  insert('GET', '/static/**', (rest) => '11' + rest);

  spec(
    'mapl (jit)',
    getDependency(
      exportScope(
        scope,
        `(o)=>{var ${PATH}=o.url;${compile(router, 'o.method', 1)}return ''}` as any,
      ),
    ),
  );
}
