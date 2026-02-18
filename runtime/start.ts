import INFO from './.out/info.json';

import { benchFile, runtimeId } from '../lib/runtime.ts';
import { getCategoryResults, SpeedCategoryResults } from '../lib/result.ts';
import { fmt } from '../lib/format.ts';
import { math } from '../lib/math.ts';

import config from './config.ts';

await using RESULTS = getCategoryResults('runtime', runtimeId);
const ALL_CATEGORIES_RESULTS: SpeedCategoryResults.All = {};

for (const categoryName in INFO) {
  if (!config.include.category(categoryName)) continue;
  const category = INFO[categoryName as keyof typeof INFO];

  for (const caseName in category) {
    if (!config.include.case(categoryName, caseName)) continue;
    console.log('  case:', fmt.h1(categoryName + ' - ' + caseName));

    let totalRuntime = Bun.nanoseconds();
    try {
      for (
        let i = 0, TRIALS = benchFile(category[caseName as keyof typeof category]);
        i < TRIALS.length;
        i++
      ) {
        const trial = TRIALS[i];

        const alias = trial.alias;
        console.log('    bench:', fmt.h2(alias));

        const values = trial.runs.flatMap((run) => run.stats!.samples);

        if (alias.includes('/')) {
          const PARENT_CATEGORY_RESULTS = (ALL_CATEGORIES_RESULTS[categoryName] ??= {});
          if (PARENT_CATEGORY_RESULTS instanceof SpeedCategoryResults)
            throw new Error('Cannot have subcategories of ' + categoryName);

          const separatorIdx = alias.lastIndexOf('/');
          console.log(
            '      average:',
            fmt.duration(
              (
                (PARENT_CATEGORY_RESULTS[alias.slice(0, separatorIdx)] ??=
                  new SpeedCategoryResults()) as SpeedCategoryResults
              ).addAndSort(alias.slice(separatorIdx + 1), values),
            ),
          );
        } else {
          console.log(
            '      average:',
            fmt.duration(
              (
                (ALL_CATEGORIES_RESULTS[categoryName] ??=
                  new SpeedCategoryResults()) as SpeedCategoryResults
              ).addAndSort(alias, values),
            ),
          );
        }
        console.log('      variation:', fmt.percentage(math.rsd(values)));
      }
    } catch (e) {
      console.error('  skipping case:', fmt.h1(categoryName + ' - ' + caseName));
      console.error(e);
    }
    totalRuntime = Bun.nanoseconds() - totalRuntime;

    console.log('    total time:', fmt.duration(totalRuntime));
  }
}

Object.assign(RESULTS, SpeedCategoryResults.serializeToChartJS(ALL_CATEGORIES_RESULTS));
