import { math } from "./math.ts";

const FILE = import.meta.dir + '/../result.json';

export const writeCategoryResult = async (name: string, result: any) => {
  const results = await Bun.file(FILE).json();
  results[name] = result;
  await Bun.write(FILE, JSON.stringify(results, null, 2));
}

export class SpeedCategoryResults {
  results: {
    caseName: string;
    values: number[];
    avg: number;
  }[];

  constructor() {
    this.results = [];
  }

  /**
   * Return the average value
   */
  addAndSort(caseName: string, values: number[]): number {
    values.sort((a, b) => a - b);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;

    this.results.push({
      caseName,
      values,
      avg
    });

    return avg;
  }

  toChartJS() {
    const categoryResults = this.results;
    categoryResults.sort((a, b) => a.avg - b.avg);

    return {
      labels: categoryResults.map((v) => v.caseName),
      datasets: [
        {
          label: "average (ms)",
          // Ns to ms
          data: categoryResults.map((v) =>
            +(v.avg / 1e6).toFixed(2)
          ),
        },
        ...[.50, .75, .99, .999].map((p) => (
          {
            label: `p${p * 100} (ms)`,
            data: categoryResults.map((v) =>
              +(math.percentile(v.values, p) / 1e6).toFixed(2),
            ),
          }
        ))
      ]
    };
  }
}

import RESULTS from "../result.json";
export const runSpeedCases = (info: Record<string, Record<string, string>>, name: string, runtimeId: string, callback: (categoryName: string, caseName: string, caseInfo: string, categoryResults: SpeedCategoryResults) => void) => {
  // @ts-ignore
  const ALL_RUNTIME_RESULTS = RESULTS[name] ??= {} as Record<string, any>;
  // @ts-ignore
  const results = ALL_RUNTIME_RESULTS[runtimeId] = {} as Record<string, any>;

  for (const categoryName in info) {
    const category = info[categoryName];
    const categoryResults = new SpeedCategoryResults();

    for (const caseName in category)
      callback(categoryName, caseName, category[caseName], categoryResults);

    results[categoryName] = categoryResults.toChartJS();
  }

  return writeCategoryResult(name, ALL_RUNTIME_RESULTS);
}
