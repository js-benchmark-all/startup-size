import { rand } from '../../../lib/rand.ts';
import type { Type } from './assert-simple.spec.ts';

// assert-simple
{
  const valids: Type[] = new Array(5000).fill(0).map(() => ({
    id: rand.int(0, 128),
    displayName: rand.chance(0.9) ? rand.string(rand.ENGLISH_ALPHABET, rand.int(3, 10)) : undefined,
    health: rand.float(0, 100),
    inventory: rand.array(rand.int(0, 30), () => ({
      id: rand.int(0, 128),
      displayName: rand.chance(0.9) ? rand.string(rand.ENGLISH_ALPHABET, rand.int(3, 10)) : undefined,
      tags: rand.array(rand.int(0, 2), () => rand.item(['melee', 'projectile'])),
    })),
  }));

  Bun.write(import.meta.dir + '/assert-simple.json', JSON.stringify(valids, null, 2));
}
