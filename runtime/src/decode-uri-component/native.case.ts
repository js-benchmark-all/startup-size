import validSpec from './valid/index.spec.ts';
import invalidSpec from './invalid/index.spec.ts';

const decode = (str: string) => {
  try {
    return decodeURIComponent(str);
  } catch {}
}

validSpec('native', decode);
invalidSpec('native', decode);
