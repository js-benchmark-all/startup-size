import INFO from './.out/info.json';

import { SingleBar } from 'cli-progress';

import { fmt } from '../lib/format.ts';
import { getCategoryResults, SpeedCategoryResults } from '../lib/result.ts';
import { runFile, runtimeId } from '../lib/runtime.ts';
import { math } from '../lib/math.ts';

import config from './config.ts';

await using RESULTS = getCategoryResults('startup time', runtimeId);

const PROGRESS_BAR = new SingleBar({
  format: '    [{bar}] {value}/{total}',
  barCompleteChar: '#',
  barIncompleteChar: '-',
  clearOnComplete: true,
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
      PROGRESS_BAR.start(config.runs, 0);

      let totalRuntime = Bun.nanoseconds();
      for (let i = 1; i <= config.runs; i++, PROGRESS_BAR.increment()) {
        Bun.gc(true);
        values.push(runFile(category[caseName as keyof typeof category]));
      }
      totalRuntime = Bun.nanoseconds() - totalRuntime;

      console.log('    total time:', fmt.duration(totalRuntime));
    } catch (e) {
      console.error('  skipping case:', fmt.h1(categoryName + ' - ' + caseName));
      console.error(e);
    } finally {
      PROGRESS_BAR.stop();
    }

    console.log('    average:', fmt.duration(categoryResults.addAndSort(caseName, values)));
    console.log('    variation:', fmt.percentage(math.rsd(values)));
  }

  RESULTS[categoryName] = categoryResults.toChartJS();
}
