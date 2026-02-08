import { id } from './.out/deno.js';
import { getDependency } from 'runtime-compiler';

export const app = getDependency(id);
