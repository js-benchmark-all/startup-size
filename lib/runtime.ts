import { $, spawnSync } from 'bun';
import { readFileOutput } from './output.ts';
import { fmt } from './format.ts';
import runtimeName from './runtime-name.ts';

const createStartupRunner =
  (...commands: string[]) =>
  (file: string) =>
    +readFileOutput(
      spawnSync(commands.concat(file), {
        timeout: 5000,
        stderr: 'inherit',
      }).stdout.toString(),
    );
const createBenchRunner =
  (...commands: string[]) =>
  (file: string) =>
    JSON.parse(
      readFileOutput(
        spawnSync(commands.concat(file), {
          stderr: 'inherit',
        }).stdout.toString(),
      ),
    );

const runtimes: Record<
  string,
  {
    id: () => Promise<string>;

    /**
     * Run a file and return the startup time
     */
    run: (file: string) => number;

    /**
     * Run a benchmark file and return raw mitata results
     */
    bench: (file: string) => import('mitata').trial[];
  }
> = {
  bun: {
    id: async () => 'bun-' + (await $`bun -v`.text()).trim(),
    run: createStartupRunner('bun', 'run'),
    bench: createBenchRunner('bun', 'run'),
  },
  deno: {
    id: async () => 'deno-' + (await $`deno -v`.text()).split(' ').at(-1)!.trim(),
    run: createStartupRunner('deno', 'run', '-A', '--v8-flags=--expose-gc'),
    bench: createBenchRunner('deno', 'run', '-A', '--v8-flags=--expose-gc,--allow-natives-syntax'),
  },
  node: {
    id: async () => 'node-' + (await $`node -v`.text()).slice(1).trim(),
    run: createStartupRunner('node', '--expose-gc'),
    bench: createBenchRunner('node', '--expose-gc', '--allow-natives-syntax'),
  },
};

const runtime = runtimes[runtimeName];
if (runtime == null) {
  console.error('Unrecognized runtime:', runtimeName);
  console.error('A runtime can be specified with --runtime option');
  process.exit(1);
}

/**
 * Run a file and return startup time
 */
export const runFile = runtime.run;

/**
 * Run a file and return mitata results
 */
export const benchFile = runtime.bench;

/**
 * Runtime ID
 */
export const runtimeId = await runtime.id();

console.log('runtime:', fmt.h1(runtimeId));
