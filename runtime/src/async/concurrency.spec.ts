import { bench } from 'mitata';

const CONCURRENCIES = [1, 2, 4, 8, 16, 32, 64];
export const TASKS_COUNT = 300;
const TASKS = new Array(TASKS_COUNT).fill(null);

let runningTasks = 0;
const nextTick = Promise.resolve();
const task = async () => {
  runningTasks++;
  await nextTick;
  runningTasks--;
};

export default async (
  name: string,
  fn: (task: () => Promise<void>, concurrency: number) => null | undefined | (() => Promise<void>),
) => {
  tests: for (const CONCURRENCY of CONCURRENCIES) {
    const runner = fn(task, CONCURRENCY);
    if (runner == null) continue tests;

    // Test correctness
    Promise.all(TASKS.map(runner)).then(() => (runningTasks = -1));
    while (runningTasks > -1) {
      if (runningTasks > CONCURRENCY) {
        console.error(name, 'failed with concurrency', CONCURRENCY);
        console.error(name, 'is running', runningTasks, 'concurrently instead');
        continue tests;
      }
      await nextTick;
    }
    runningTasks = 0;

    bench(`concurrency ${CONCURRENCY}/${name}`, () => Promise.all(TASKS.map(runner))).gc('inner');
  }
};
