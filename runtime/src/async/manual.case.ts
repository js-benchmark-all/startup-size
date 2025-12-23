import concurrency, { TASKS_COUNT } from './concurrency.spec.ts';

const nextTick = Promise.resolve();
await concurrency('manual', (task, c) => {
  if (c === 1) {
    let lock = nextTick;
    return () => lock = lock.finally(task);
  }

  let permits = TASKS_COUNT;
  return async () => {
    while (permits <= 0)
      await nextTick;

    permits--;
    try {
      await task();
    } finally {
      permits++;
    }
  };
});
