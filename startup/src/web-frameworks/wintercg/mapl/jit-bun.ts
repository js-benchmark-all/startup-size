import id from './target/bun.ts';
import { getDependency } from 'runtime-compiler';

export const app = {
  routes: getDependency(id),
};
