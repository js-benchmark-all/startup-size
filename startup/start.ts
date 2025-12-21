import INFO from "./.out/info.json";
import config from "./config.ts";
import { fmt } from "../lib/format.ts";
import { runSpeedCases } from "../lib/result.ts";
import { runFile, runtimeId } from "../lib/runtime.ts";
import { math } from "../lib/math.ts";

await runSpeedCases(INFO, 'startup time', runtimeId, (categoryName, caseName, caseInfo, results) => {
  console.log("  case:", fmt.h1(categoryName + ' - ' + caseName));

  const values = [];
  for (
    let i = 1;
    i <= config.runs;
    i++
  ) {
    Bun.gc(true);
    const value = runFile(caseInfo);
    values.push(value);
    console.log(`    run ${i}:`, fmt.duration(value));
  }

  results.addAndSort(caseName, values);
  console.log('    variance:', fmt.percentage(math.rsd(values)));
});
