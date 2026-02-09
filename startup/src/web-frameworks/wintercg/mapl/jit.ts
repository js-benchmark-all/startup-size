import id from './target/generic.ts';
import { getDependency } from 'runtime-compiler';

export const app = {
  fetch: getDependency(id),
};
