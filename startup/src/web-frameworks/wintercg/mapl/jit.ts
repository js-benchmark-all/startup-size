import { getDependency } from 'runtime-compiler';
import main from './main.ts';

export const app = {
  fetch: getDependency(main),
};
