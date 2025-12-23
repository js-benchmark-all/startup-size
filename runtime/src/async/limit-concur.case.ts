import concurrency from './concurrency.spec.ts';
import limitConcur from 'limit-concur';

await concurrency('limit-concur', (task, c) => limitConcur(c, task));
