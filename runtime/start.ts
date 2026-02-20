import INFO from './.out/info.json';

import { benchFile, runtimeId } from '../lib/runtime.ts';
import { getCategoryResults, CategoryResultsRenderer } from '../lib/result.ts';
import { fmt } from '../lib/format.ts';
import { math } from '../lib/math.ts';

import config from './config.ts';
import { BYTE, TIME } from '../lib/units.ts';

const RUNTIME_CATEGORIES_RESULTS: CategoryResultsRenderer.All = {};
const HEAP_CATEGORIES_RESULTS: CategoryResultsRenderer.All = {};

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

        const runTimes = trial.runs.flatMap((run) => run.stats!.samples);

        const heapUsages = trial.runs.map((run) => run.stats!.heap?.avg);
        const hasHeapUsages = heapUsages[0] != null;

        if (alias.includes('/')) {
          const PARENT_CATEGORY_RESULTS = (RUNTIME_CATEGORIES_RESULTS[categoryName] ??= {});
          if (PARENT_CATEGORY_RESULTS instanceof CategoryResultsRenderer)
            throw new Error('Cannot have subcategories of ' + categoryName);

          const separatorIdx = alias.lastIndexOf('/');
          const subCategoryName = alias.slice(0, separatorIdx);
          const caseName = alias.slice(separatorIdx + 1);

          console.log(
            '      average:',
            fmt.duration(
              (
                (PARENT_CATEGORY_RESULTS[subCategoryName] ??=
                  new CategoryResultsRenderer()) as CategoryResultsRenderer
              ).addAndSort(caseName, runTimes),
            ),
          );

          // Include heap usages if has one
          if (hasHeapUsages) {
            const PARENT_CATEGORY_RESULTS = (HEAP_CATEGORIES_RESULTS[categoryName] ??= {});
            if (PARENT_CATEGORY_RESULTS instanceof CategoryResultsRenderer)
              throw new Error('Cannot have subcategories of ' + categoryName);

            console.log(
              '      heap:',
              fmt.byte(
                (
                  (PARENT_CATEGORY_RESULTS[subCategoryName] ??=
                    new CategoryResultsRenderer()) as CategoryResultsRenderer
                ).addAndSort(caseName, heapUsages as number[]),
              ),
            );
          }
        } else {
          console.log(
            '      average:',
            fmt.duration(
              (
                (RUNTIME_CATEGORIES_RESULTS[categoryName] ??=
                  new CategoryResultsRenderer()) as CategoryResultsRenderer
              ).addAndSort(alias, runTimes),
            ),
          );

          // Include heap usages if has one
          if (hasHeapUsages) {
            console.log(
              '      heap:',
              fmt.byte(
                (
                  (HEAP_CATEGORIES_RESULTS[categoryName] ??=
                    new CategoryResultsRenderer()) as CategoryResultsRenderer
                ).addAndSort(caseName, heapUsages as number[]),
              ),
            );
          }
        }
        console.log('      variation:', fmt.percentage(math.rsd(runTimes)));
      }
    } catch (e) {
      console.error('  skipping case:', fmt.h1(categoryName + ' - ' + caseName));
      console.error(e);
    }
    totalRuntime = Bun.nanoseconds() - totalRuntime;

    console.log('    total time:', fmt.duration(totalRuntime));
  }
}

await using RUNTIME_RESULTS = getCategoryResults('runtime', runtimeId);
Object.assign(RUNTIME_RESULTS, CategoryResultsRenderer.serializeToChartJS(RUNTIME_CATEGORIES_RESULTS, TIME));

await using HEAP_RESULTS = getCategoryResults('heap usage', runtimeId);
Object.assign(HEAP_RESULTS, CategoryResultsRenderer.serializeToChartJS(HEAP_CATEGORIES_RESULTS, BYTE, []));
