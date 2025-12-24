import concurrency, { TASKS_COUNT } from './concurrency.spec.ts';
import { Mutex, Semaphore } from 'async-mutex';

await concurrency('async-mutex', (task, c) => {
  if (c === 1) {
    const mu = new Mutex();
    return () => mu.runExclusive(task);
  }

  const sem = new Semaphore(c);
  return () => sem.runExclusive(task);
});
