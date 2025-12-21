import INFO from './.out/info.json';
import { runtimeId, benchFile } from "../lib/runtime.ts";
import { runSpeedCases } from '../lib/result.ts';
import { fmt } from '../lib/format.ts';
import { math } from '../lib/math.ts';

await runSpeedCases(INFO, 'runtime', runtimeId, (categoryName, caseName, caseInfo, results) => {
  console.log("  case:", fmt.h1(categoryName + ' - ' + caseName));

  for (let i = 0, trials = benchFile(caseInfo); i < trials.length; i++) {
    const trial = trials[i];
    const values = trial.runs.flatMap((run) => run.stats!.samples);

    console.log("    bench:", fmt.h2(trial.alias));
    console.log("      average:", fmt.duration(
      results.addAndSort(trial.alias, values)
    ));
    console.log('      variance:', fmt.percentage(math.rsd(values)));
  }
});
