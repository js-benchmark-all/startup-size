import { math } from './math.ts';

const FILE = import.meta.dir + '/../result.json';

export const writeCategoryResult = async (name: string, result: any) => {
  const results = await Bun.file(FILE).json();
  results[name] = result;
  await Bun.write(FILE, JSON.stringify(results, null, 2));
};

const TIME_UNIT = ['ns', 'µs', 'ms', 's'];

namespace SpeedCategoryResults {
  export type All = {
    [key: string]: SpeedCategoryResults | All;
  };
}

class SpeedCategoryResults {
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
      avg,
    });

    return avg;
  }

  toChartJS() {
    const categoryResults = this.results;
    categoryResults.sort((a, b) => a.avg - b.avg);

    // Select appropriate units to display data
    let unitIndex = 0,
      div = 1;
    {
      let max = categoryResults.at(-1)?.avg;
      if (max)
        while (max > 1e3 && unitIndex < TIME_UNIT.length) {
          unitIndex++;
          div *= 1e3;
          max /= 1e3;
        }
    }
    const unit = TIME_UNIT[unitIndex];

    return {
      labels: categoryResults.map((v) => v.caseName),
      datasets: [
        {
          label: `average (${unit})`,
          // Ns to ms
          data: categoryResults.map((v) => +(v.avg / div).toFixed(2)),
        },
        ...[0.5, 0.75, 0.99].map((p) => ({
          label: `p${p * 100} (${unit})`,
          data: categoryResults.map((v) => +(math.percentile(v.values, p) / div).toFixed(2)),
        })),
      ],
    };
  }

  static serializeToChartJS = (results: SpeedCategoryResults.All) => {
    const o = {} as CategoryResults;
    for (const key in results) {
      const result = results[key];
      o[key] = result instanceof SpeedCategoryResults ? result.toChartJS() : this.serializeToChartJS(result);
    }
    return o;
  }
}

export { SpeedCategoryResults };

import RESULTS from '../result.json';

type CategoryResults = {
  [key: string]:
    | CategoryResults
    | {
        labels: string[];
        datasets: {
          label: string;
          data: number[];
        }[];
      };
};

/**
 * @example
 * await using results = getCategoryResults('startup time', 'bun');
 */
export const getCategoryResults = (
  name: string,
  runtimeId: string,
): CategoryResults & AsyncDisposable => {
  // @ts-ignore
  const ALL_RUNTIME_RESULTS = (RESULTS[name] ??= {} as Record<string, any>);
  // @ts-ignore
  const results = (ALL_RUNTIME_RESULTS[runtimeId] = {} as Record<string, any>);

  // @ts-ignore
  results[Symbol.asyncDispose] = async () => writeCategoryResult(name, ALL_RUNTIME_RESULTS);
  // @ts-ignore
  return results;
};
