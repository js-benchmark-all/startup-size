import assertSimple from './assert-simple.spec.ts';
import { type } from 'arktype';

const Id = type('number.integer >= 0');
const DisplayName = type('3 <= string <= 24');

const assert = type({
  id: Id,
  'displayName?': DisplayName,
  health: '0 <= number <= 100',
  inventory: type({
    id: Id,
    'displayName?': DisplayName,
    'tags?': 'string[]',
  })
    .array()
    .atMostLength(30),
}).allows;

assertSimple('arktype', (o) => {
  if (!assert(o)) throw new Error();
});
