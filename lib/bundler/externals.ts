import { esmExternalRequirePlugin } from 'rolldown/plugins';

export default esmExternalRequirePlugin({
  external: [/^node:/, /^bun:/, 'bun'],
  skipDuplicateCheck: true,
});
