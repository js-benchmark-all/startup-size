import concurrency from './concurrency.spec.ts';

const nextTick = Promise.resolve();
await concurrency('manual', (task, permits) => {
  if (permits === 1) {
    let lock = nextTick;
    return () => (lock = lock.finally(task));
  }

  return async () => {
    while (permits <= 0) await nextTick;

    permits--;
    try {
      await task();
    } finally {
      permits++;
    }
  };
});
