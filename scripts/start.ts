import INFO from "../.out/info.json";
import RESULTS from "../result.json";
import { config } from "../lib/config.ts";
import { fmt } from "../lib/format.ts";
import { writeCategoryResult } from "../lib/result.ts";
import { runFile, runtimeId } from "../lib/runtime.ts";

const percentile = (arr: number[], p: number) => {
  const n = arr.length;

  const index = p * (n - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);

  if (upper >= n) return arr[lower];

  const weight = index - lower;
  return arr[lower] * (1 - weight) + arr[upper] * weight;
}

// Dont override previous runs results
const STARTUP_RESULT = RESULTS['startup time'] ??= {} as any;

// @ts-ignore
const results = (STARTUP_RESULT[runtimeId] = {});

for (const categoryName in INFO) {
  console.log("  category:", fmt.h2(categoryName));

  const category = INFO[categoryName as keyof typeof INFO];
  const categoryResults: {
    caseName: string;
    values: number[];
    total: number;
  }[] = [];

  for (const caseName in category) {
    console.log("    case:", fmt.h2(caseName));

    const values = [];
    for (
      let i = 1,
      caseInfo: string = category[caseName as keyof typeof category];
      i <= config.runs;
      i++
    ) {
      const value = runFile(caseInfo);
      values.push(value);
      console.log(`      run ${i}:`, value);
    }

    // Add to results
    categoryResults.push({
      caseName,
      values: values.sort((a, b) => a - b),
      total: values.reduce((a, b) => a + b, 0),
    });
  }

  categoryResults.sort((a, b) => a.total - b.total);

  // @ts-ignore
  results[categoryName] = {
    labels: categoryResults.map((v) => v.caseName),
    datasets: [
      {
        label: "average (ms)",
        // Ns to ms
        data: categoryResults.map((v) =>
          +(v.total / config.runs / 1e6).toFixed(2)
        ),
      },
      ...[50, 75, 99, 999].map((p) => {
        const label = `p${p} (ms)`;
        p = +`0.${p}`;
        return {
          label,
          data: categoryResults.map((v) =>
            +(percentile(v.values, p) / 1e6).toFixed(2),
          ),
        };
      }),
    ],
  };
}

await writeCategoryResult("startup time", STARTUP_RESULT);
