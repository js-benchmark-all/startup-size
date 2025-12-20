import { $, spawnSync } from 'bun';
import { parseArgs } from 'node:util';
import { readFileOutput } from './startup';
import { fmt } from './format';

const SPAWN_OPTIONS = {
  timeout: 5000,
  stderr: 'inherit'
} as const;
const createRunner = (...commands: string[]) => (file: string) => readFileOutput(
  spawnSync(commands.concat(file), SPAWN_OPTIONS).stdout.toString()
);
const runtimes: Record<string, {
  id: () => Promise<string>,
  run: (file: string) => number
}> = {
  bun: {
    id: async () => 'bun-' + (await $`bun -v`.text()).trim(),
    run: createRunner('bun', 'run')
  },
  deno: {
    id: async () => 'deno-' + (await $`deno -v`.text()).split(' ').at(-1)!.trim(),
    run: createRunner('deno', 'run', '--allow-net', '--allow-env')
  },
  node: {
    id: async () => 'node-' + (await $`node -v`.text()).slice(1).trim(),
    run: createRunner('node')
  }
};

// Detect runtime from args
const runtimeName = parseArgs({
  options: {
    runtime: {
      type: 'string',
      multiple: false,
    }
  },
  strict: true
}).values.runtime as any;

const runtime = runtimes[runtimeName];
if (runtime == null) {
  console.error('Unrecognized runtime:', runtimeName);
  console.error('A runtime can be specified with --runtime option');
  process.exit(1);
}

/**
 * Run a file and return result
 */
export const runFile = runtime.run;

/**
 * Runtime ID
 */
export const runtimeId = await runtime.id();

console.log("runtime:", fmt.h1(runtimeId));
