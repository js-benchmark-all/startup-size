import concurrency from './concurrency.spec.ts';
import Mutex from 'p-mutex';

await concurrency('p-mutex', (task, c) => {
  if (c === 1) {
    const mu = new Mutex();
    return () => mu.withLock(task);
  }
});
