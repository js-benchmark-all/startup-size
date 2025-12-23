import concurrency, { TASKS_COUNT } from './concurrency.spec.ts';
import { semaphore, mutex } from 'ciorent';

await concurrency('ciorent', (task, c) => {
  if (c === 1) {
    const mu = mutex.init();
    return () => mutex.run(mu, task);
  }

  const sem = semaphore.init(c, TASKS_COUNT - c);
  return async () => {
    await semaphore.acquire(sem);
    try {
      await task();
    } finally {
      semaphore.release(sem);
    }
  };
});
