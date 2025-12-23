import concurrency, { TASKS_COUNT } from './concurrency.spec.ts';
import { Sema } from 'async-sema';

await concurrency('async-sema', (task, permits) => {
  const sem = new Sema(permits, {
    capacity: TASKS_COUNT - permits
  });
  return async () => {
    await sem.acquire();
    try {
      await task();
    } finally {
      sem.release();
    }
  };
});
