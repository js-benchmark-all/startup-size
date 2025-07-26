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
  getter: (t: (typeof RESULTS)[number]) => number,
  formatter: (t: any) => string,
  diff: string;
}[];

// Print results
console.log('Runtime:', utils.format.header(utils.RUNTIME) + '\n');

for (const category in CATEGORIES) {
  console.log(utils.format.header(category) + ':');

  for (const comparison of COMPARISONS) {
    console.log('  ' + utils.format.header(comparison.label) + ':');

    // Sort by selected prop
    const results = CATEGORIES[category]!.toSorted(
      (a, b) => comparison.getter(a) - comparison.getter(b),
    );

    const baseline = comparison.getter(results[0]);
    for (let i = 0; i < results.length; i++) {
      const res = comparison.getter(results[i]);
      console.log(
        `    ${utils.format.name(results[i].name)}: ${comparison.formatter(res)}` +
          (i === 0 ? '' : ` - ${utils.format.multiplier(res / baseline)} ${comparison.diff}`),
      );
    }
  }
}

{
  const props = Object.entries(CATEGORIES)
    .map(
      ([key, value]) => {
        const props = Object.groupBy(value!, (o) => {
          const c = o.name;
          // @ts-expect-error Unset the prop
          o.name = undefined;
          return c;
        });

        return [
          key,
          Object.fromEntries(
            Object.entries(props)
              .map(([key, value]) => [key, value![0]])
          )
        ];
      }
    );

  utils.tryMkdirAsync('./all-results', () =>
    utils.tryWriteAsync(
      `./all-results/${utils.RUNTIME}.json`,
      JSON.stringify(Object.fromEntries(props), null, 2)
    )
  );

  for (const [category, result] of props) {
    const resultDir = 'src/' + category + '/.results/';

    utils.tryMkdirAsync(resultDir, () => {
      utils.tryWriteAsync(
        `${resultDir}${utils.RUNTIME}.json`,
        JSON.stringify(result, null, 2)
      );
    });
  }
}
