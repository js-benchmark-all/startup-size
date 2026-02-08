import { build } from '@mapl/web/deno';
import main from './main.ts';

export const id = build(main);
