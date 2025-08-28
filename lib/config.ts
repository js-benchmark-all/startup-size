import { $, spawn } from 'bun';

export const RUNS = 10;

const SPAWN_OPTIONS = {
  stderr: 'inherit',
  timeout: 10000,
  stdout: 'pipe'
} as const;

export const RUNTIMES = {
  bun: {
    id: async () => 'bun-' + await $`bun -v`.text(),
    run: (file: string) => spawn([
      'bun', 'run', file
    ], SPAWN_OPTIONS)
  },
  deno: {
    id: async () => 'deno-' + (await $`deno -v`.text()).split(' ').at(-1),
    run: (file: string) => spawn([
      'deno', 'run', '--allow-net', '--allow-env', file
    ], SPAWN_OPTIONS)
  },
  node: {
    id: async () => 'node-' + (await $`node -v`.text()).slice(1),
    run: (file: string) => spawn([
      'node', file
    ], SPAWN_OPTIONS)
  }
} satisfies Record<string, {
  id: () => Promise<string>,
  run: (file: string) => Bun.Subprocess<Bun.SpawnOptions.Writable, "pipe", "inherit">
}>;

export const FILTERS = {
  includeCategory: (category: string) => true,
  includeCase: (category: string, name: string) => true,
} satisfies Record<string, (...args: any[]) => boolean>;
