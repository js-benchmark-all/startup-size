import validSpec from './valid/index.spec.ts';
import invalidSpec from './invalid/index.spec.ts';

import decode from 'fast-decode-uri-component';

validSpec('fast-decode-uri-component', decode);
invalidSpec('fast-decode-uri-component', decode);
