import { router, send } from '@mapl/web';
import { vars, compile } from '@mapl/web/generic';

const root = router.init();

send.body(router.get(root, '/'), () => 'Hi');
send.body(router.get(root, '/user/*'), (id) => id);
send.jsonAsync(router.post(root, '/json'), (req) => req.json(), vars.request);

export default compile(root);
