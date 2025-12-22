import { bench } from 'mitata';
import valids from './tests.json';

export interface Type {
  // min: 0, integer
  id: number;
  // minLength: 3, maxLength: 24
  displayName?: string;
  // min: 0, max: 100
  health: number;
  // maxLength: 30
  inventory: {
    // min: 0, integer
    id: number;
    // minLength: 3, maxLength: 24
    displayName?: string;
    tags?: string[];
  }[];
}

const invalids = [
  { id: -5, displayName: 'AB', health: 120, inventory: [{ id: 1, displayName: 'X' }] },
  { id: 0.5, health: -10, inventory: [] },
  { id: 3, health: 101, inventory: [{ id: -2, displayName: 'OK' }] },
  { id: 4, displayName: 'Hi', health: 50, inventory: [{ id: 9, displayName: 'YZ' }] },
  { id: 5, health: 0, inventory: [{ id: 0, displayName: 'A' }] },
  { id: 6, displayName: null, health: 30, inventory: [{ id: 7, displayName: 'BB' }] },
  { id: 7, health: 100.5, inventory: [{ id: 8, displayName: '' }] },
  {
    id: 8,
    displayName: 'ValidName',
    health: 50,
    inventory: new Array(31).fill({ id: 1, displayName: 'sword' }),
  },
  { id: 9, health: 50, inventory: 'not-an-array' },
  { id: 10, displayName: 123, health: 50, inventory: [] },
  { id: 11, health: 50, inventory: [{ id: 12, displayName: 456 }] },
  {
    id: 12,
    health: 50,
    inventory: [{ id: 13, displayName: 'anamethatisverylongandshouldnotpassdisplaynamecheck' }],
  },
  { id: 13, displayName: 'OK', health: 50 },
  { id: 14, displayName: 'Yep', health: 50, inventory: null },
  { id: 15, displayName: 'Sure', health: 50, inventory: [null] },
  { id: 16, displayName: 'A', health: 50, inventory: [] },
  { id: 17, displayName: 'Two', health: 50, inventory: [{ id: -100, displayName: 'Bad' }] },
  { id: 18, displayName: 'X', health: 50, inventory: [] },
];

export const register = (name: string, fn: (item: any) => void | never) => {
  for (let i = 0; i < invalids.length; i++) {
    try {
      fn(invalids[i]);
      console.error(name, 'does not pass invalid test', invalids[i]);
      console.error('skipping', name);
      return;
    } catch {}
  }

  for (let i = 0; i < valids.length; i++) {
    try {
      fn(valids[i]);
    } catch {
      console.error(name, 'does not pass valid test', valids[i]);
      console.error('skipping', name);
    }
  }

  bench(name, function* () {
    yield {
      [0]: () => valids,
      bench: (data: typeof valids) => {
        for (let i = 0; i < data.length; i++) fn(data[i]);
      },
    };
  }).gc('inner');
};
