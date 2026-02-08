import { router, send } from '@mapl/web';
import { request, build } from '@mapl/web/deno';
import { getDependency } from 'runtime-compiler';

export const app = getDependency(
  build(
    router.init(
      [],
      [
        router.get(
          '/',
          send.raw(() => 'Hi'),
        ),
        router.get(
          '/user/*',
          send.raw((id) => id),
        ),
        router.post(
          '/body',
          send.json(async (req) => req.json(), request),
        ),
      ],
    ),
  ),
);
