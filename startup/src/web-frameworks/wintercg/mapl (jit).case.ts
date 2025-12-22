import { inject, router, send } from '@mapl/web';
import { request, compiler } from '@mapl/web/generic';

export const app = {
  fetch: compiler.build(
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
        router.post('/body', send.json(inject([request], async (req) => req.json()))),
      ],
    ),
  )(),
};

app.fetch(new Request('http://127.0.0.1'));
