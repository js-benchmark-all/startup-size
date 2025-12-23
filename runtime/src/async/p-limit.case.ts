import concurrency, { TASKS_COUNT } from './concurrency.spec.ts';
import { limitFunction } from 'p-limit';

await concurrency('p-limit', (task, c) => limitFunction(task, { concurrency: c }));
