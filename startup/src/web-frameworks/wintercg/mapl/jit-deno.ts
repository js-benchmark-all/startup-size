import id from './target/deno.ts';
import { getDependency } from 'runtime-compiler';

export const app = getDependency(id);
