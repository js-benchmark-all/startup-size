import { id } from './.out/bun.js';
import { getDependency } from 'runtime-compiler';

export const app = {
  routes: getDependency(id),
};
