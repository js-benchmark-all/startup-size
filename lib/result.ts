import { math } from './math.ts';

const FILE = import.meta.dir + '/../result.json';

export const writeCategoryResult = async (name: string, result: any) => {
  const results = await Bun.file(FILE).json();
  results[name] = result;
  await Bun.write(FILE, JSON.stringify(results, null, 2));
};

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
      avg,
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
          label: 'average (ms)',
          // Ns to ms
          data: categoryResults.map((v) => +(v.avg / 1e6).toFixed(2)),
        },
        ...[0.5, 0.75, 0.99, 0.999].map((p) => ({
          label: `p${p * 100} (ms)`,
          data: categoryResults.map((v) => +(math.percentile(v.values, p) / 1e6).toFixed(2)),
        })),
      ],
    };
  }
}

import RESULTS from '../result.json';

/**
 * @example
 * await using results = getCategoryResults('startup time', 'bun');
 */
export const getCategoryResults = (name: string, runtimeId: string): Record<string, {
  labels: string[]
  datasets: {
    label: string,
    data: number[]
  }[]
}> & AsyncDisposable => {
  // @ts-ignore
  const ALL_RUNTIME_RESULTS = (RESULTS[name] ??= {} as Record<string, any>);
  // @ts-ignore
  const results = (ALL_RUNTIME_RESULTS[runtimeId] = {} as Record<string, any>);

  // @ts-ignore
  results[Symbol.asyncDispose] = async () => writeCategoryResult(name, ALL_RUNTIME_RESULTS);
  // @ts-ignore
  return results;
}
