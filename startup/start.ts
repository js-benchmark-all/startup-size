import INFO from './.out/info.json';
import config from './config.ts';
import { fmt } from '../lib/format.ts';
import { getCategoryResults, SpeedCategoryResults } from '../lib/result.ts';
import { runFile, runtimeId } from '../lib/runtime.ts';
import { math } from '../lib/math.ts';

await using results = getCategoryResults('startup time', runtimeId);

for (const categoryName in INFO) {
  if (!config.include.category(categoryName)) continue;
  const category = INFO[categoryName as keyof typeof INFO];
  const categoryResults = new SpeedCategoryResults();

  for (const caseName in category) {
    if (!config.include.case(categoryName, caseName)) continue;
    console.log('  case:', fmt.h1(categoryName + ' - ' + caseName));

    const values = [];
    for (let i = 1; i <= config.runs; i++) {
      Bun.gc(true);
      const value = runFile(category[caseName as keyof typeof category]);
      values.push(value);
      console.log(`    run ${i}:`, fmt.duration(value));
    }

    categoryResults.addAndSort(caseName, values);
    console.log('    variance:', fmt.percentage(math.rsd(values)));
  }

  results[categoryName] = categoryResults.toChartJS();
}
