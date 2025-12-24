import INFO from './.out/info.json';

import { SingleBar } from 'cli-progress';

import { fmt } from '../lib/format.ts';
import { getCategoryResults, SpeedCategoryResults } from '../lib/result.ts';
import { runFile, runtimeId } from '../lib/runtime.ts';
import { math } from '../lib/math.ts';

import config from './config.ts';

await using results = getCategoryResults('startup time', runtimeId);

const progress = new SingleBar({
  format: '    [{bar}] {value}/{total}',
  barCompleteChar: '#',
  barIncompleteChar: '-',
  clearOnComplete: true
});

for (const categoryName in INFO) {
  if (!config.include.category(categoryName)) continue;
  const category = INFO[categoryName as keyof typeof INFO];
  const categoryResults = new SpeedCategoryResults();

  for (const caseName in category) {
    if (!config.include.case(categoryName, caseName)) continue;
    console.log('  case:', fmt.h1(categoryName + ' - ' + caseName));

    const values = [];

    try {
      progress.start(config.runs, 0);
      for (let i = 1; i <= config.runs; i++, progress.increment()) {
        Bun.gc(true);
        values.push(runFile(category[caseName as keyof typeof category]));
      }
    } catch (e) {
      console.error('  skipping case:', fmt.h1(categoryName + ' - ' + caseName));
      console.error(e);
    } finally {
      progress.stop();
    }

    console.log('    average:', fmt.duration(categoryResults.addAndSort(caseName, values)));
    console.log('    variance:', fmt.percentage(math.rsd(values)));
  }

  results[categoryName] = categoryResults.toChartJS();
}
