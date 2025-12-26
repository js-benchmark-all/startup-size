import concurrency, { TASKS_COUNT } from './concurrency.spec.ts';
import { semaphore, mutex } from 'ciorent';

await concurrency('ciorent (semaphore)', (task, c) => semaphore.limit(task, semaphore.init(c, TASKS_COUNT - c)));
await concurrency('ciorent (mutex)', (task, c) => {
  if (c === 1) {
    const mu = mutex.init();
    return () => mutex.run(mu, task);
  }
});
