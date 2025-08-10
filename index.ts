import RESULTS from './.startup/_.js';
import * as utils from './lib/utils.ts';

const CATEGORIES = Object.groupBy(
  RESULTS,
  (o) => {
    const c = o.category;
    // @ts-expect-error Unset the prop
    o.category = undefined;
    return c;
  }
);
const COMPARISONS = [
  {
    label: 'startup time',
    getter: (o) => o.startup,
    formatter: utils.format.time,
    diff: 'slower'
  }
] satisfies {
  label: string,
  getter: (t: (typeof RESULTS)[number]) => number,
  formatter: (t: any) => string,
  diff: string;
}[];

console.log('Runtime:', utils.format.header(utils.RUNTIME) + '\n');
const allSortedResults: Record<string, any> = {};

for (const category in CATEGORIES) {
  // Stored results
  const categoryResults = allSortedResults[category] = {} as any;

  console.log(utils.format.header(category) + ':');

  for (const comparison of COMPARISONS) {
    // Stored result of this label
    const comparisonResult = categoryResults[comparison.label] = [] as any[];

    console.log('  ' + utils.format.header(comparison.label) + ':');

    // Sort by selected prop
    const results = CATEGORIES[category]!.toSorted(
      (a, b) => comparison.getter(a) - comparison.getter(b),
    );

    const baseline = comparison.getter(results[0]);
    for (let i = 0; i < results.length; i++) {
      const res = comparison.getter(results[i]);

      // Log result
      console.log(
        `    ${utils.format.name(results[i].name)}: ${comparison.formatter(res)}` +
          (i === 0 ? '' : ` - ${utils.format.multiplier(res / baseline)} ${comparison.diff}`),
      );

      // Store result
      comparisonResult.push([results[i].name, res]);
    }
  }

  console.log();
}

utils.tryMkdirAsync(utils.ALL_RESULTS, () =>
  utils.tryWriteAsync(
    `${utils.ALL_RESULTS}${utils.RUNTIME}.json`,
    JSON.stringify(allSortedResults, null, 2)
  )
);
