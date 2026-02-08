import { router, send } from '@mapl/web';
import { request } from '@mapl/web/generic';

export default router.init(
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
);
