import { router, send } from '@mapl/web';
import { request, build } from '@mapl/web/generic';
import { getDependency } from 'runtime-compiler';

export const app = {
  fetch: getDependency(
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
          router.post('/body', send.json(async (req) => req.json(), request)),
        ],
      ),
    ),
  )
};

app.fetch(new Request('http://127.0.0.1'));
