import validSpec from './valid/index.spec.ts';
import invalidSpec from './invalid/index.spec.ts';

import { decodeComponent } from 'deuri';

validSpec('deuri', decodeComponent);
invalidSpec('deuri', decodeComponent);
