import { id } from './.out/generic.js';
import { getDependency } from 'runtime-compiler';

export const app = {
  fetch: getDependency(id),
};
