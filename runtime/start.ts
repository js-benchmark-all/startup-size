import INFO from './.out/info.json';
import { benchFile, runtimeId } from '../lib/runtime.ts';
import { getCategoryResults, SpeedCategoryResults } from '../lib/result.ts';
import { fmt } from '../lib/format.ts';
import { math } from '../lib/math.ts';

await using results = getCategoryResults('runtime', runtimeId);
const allCategoryResults: Dict<SpeedCategoryResults> = {};

for (const categoryName in INFO) {
  const category = INFO[categoryName as keyof typeof INFO];

  for (const caseName in category) {
    console.log('  case:', fmt.h1(categoryName + ' - ' + caseName));

    for (let i = 0, trials = benchFile(category[caseName as keyof typeof category]); i < trials.length; i++) {
      const trial = trials[i];
      const values = trial.runs.flatMap((run) => run.stats!.samples);
      const alias = trial.alias;

      console.log('    bench:', fmt.h2(alias));

      if (alias.includes('/')) {
        const separatorIdx = alias.lastIndexOf('/');
        console.log('      average:', fmt.duration(
          (
            allCategoryResults[categoryName + ' (' + alias.slice(0, separatorIdx) + ')']
              ??= new SpeedCategoryResults()
          ).addAndSort(alias.slice(separatorIdx + 1), values)
        ));
      } else {
        console.log('      average:', fmt.duration(
          (
            allCategoryResults[categoryName]
              ??= new SpeedCategoryResults()
          ).addAndSort(alias, values)
        ));
      }
      console.log('      variance:', fmt.percentage(math.rsd(values)));
    }
  }
}

for (const category in allCategoryResults)
  results[category] = allCategoryResults[category]!.toChartJS();
