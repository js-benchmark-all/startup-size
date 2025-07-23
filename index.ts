import allResults from './.startup/_.js';
import * as utils from './lib/utils.js';
import { mkdirSync, writeFileSync } from 'node:fs';

const CATEGORIES = Object.groupBy(allResults, (o) => o.category);
const COMPARISONS = [
  {
    label: 'startup time',
    getter: (o) => o.ns,
    formatter: utils.format.time,
    diff: 'slower'
  },
  {
    label: 'minified size',
    getter: (o) => o.size.minified,
    formatter: utils.format.byte,
    diff: 'bigger'
  },
  {
    label: 'gzipped size',
    getter: (o) => o.size.gzipped,
    formatter: utils.format.byte,
    diff: 'bigger',
  }
] satisfies {
  label: string,
  getter: (t: (typeof allResults)[number]) => number,
  formatter: (t: any) => string,
  diff: string;
}[];

// Print results
for (const category in CATEGORIES) {
  for (const comparison of COMPARISONS) {
    console.log(utils.format.header(category) + ':', comparison.label);

    const results = CATEGORIES[category]!.toSorted(
      (a, b) => comparison.getter(a) - comparison.getter(b),
    );
    const baseline = comparison.getter(results[0]);

    for (let i = 0; i < results.length; i++) {
      const res = comparison.getter(results[i]);
      console.log(
        `  ${utils.format.name(results[i].name)}: ${comparison.formatter(
          res as any as never,
        )}${
          i === 0 ? '' : ` - ${utils.format.multiplier(res / baseline)} ${comparison.diff}`
        }`,
      );
    }
  }
}

try {
  mkdirSync('results');
} finally {
  writeFileSync(
    `results/${utils.RUNTIME}.json`,
    JSON.stringify(allResults, null, 2)
  );
}
