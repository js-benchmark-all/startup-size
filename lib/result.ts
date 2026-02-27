import { math } from './math.ts';

const FILE = import.meta.dir + '/../result.json';

export const writeCategoryResult = async (name: string, result: any) => {
  const results = await Bun.file(FILE).json();
  results[name] = result;
  await Bun.write(FILE, JSON.stringify(results, null, 2));
};

namespace CategoryResultsRenderer {
  export type All = {
    [key: string]: CategoryResultsRenderer | All;
  };
}

class CategoryResultsRenderer {
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

  toChartJS(unitData: UnitData, percentiles: number[] = [0.5, 0.75, 0.99]) {
    const categoryResults = this.results;
    categoryResults.sort((a, b) => a.avg - b.avg);

    const max = categoryResults.at(-1)?.avg;
    if (max == null) throw new Error('Category has no results');

    const unitId = selectId(unitData, max);
    const selectedUnit = unitData.units[unitId];
    const truncateValue = truncateTo.bind(null, unitData, unitId);

    const avgData: number[] = [];
    const labels: string[] = [];
    const datasets = [
      {
        label: `avg (${selectedUnit})`,
        data: avgData,
      },
    ];

    for (const p of percentiles)
      datasets.push({
        label: `p${p * 100} (${selectedUnit})`,
        data: [],
      });

    for (const categoryResult of categoryResults) {
      avgData.push(truncateValue(categoryResult.avg));
      labels.push(categoryResult.caseName);

      for (let i = 0; i < percentiles.length; i++)
        datasets[i + 1].data.push(
          truncateValue(math.percentile(categoryResult.values, percentiles[i])),
        );
    }

    return {
      labels,
      datasets,
    };
  }

  static serializeToChartJS = (
    results: CategoryResultsRenderer.All,
    unitData: UnitData,
    percentiles: number[] = [0.5, 0.75, 0.99],
  ) => {
    const o = {} as CategoryResults;
    for (const key in results) {
      const result = results[key];
      o[key] =
        result instanceof CategoryResultsRenderer
          ? result.toChartJS(unitData, percentiles)
          : this.serializeToChartJS(result, unitData, percentiles);
    }
    return o;
  };

  static getFrom(
    results: CategoryResultsRenderer.All,
    ...paths: string[]
  ): CategoryResultsRenderer {
    for (let i = 0; i < paths.length - 1; i++) {
      // @ts-ignore
      results = results[paths[i]] ??= {};
      if (results instanceof CategoryResultsRenderer)
        throw new Error('Cannot have subcategories of ' + paths[i]);
    }

    const renderer = (results[paths[paths.length - 1]] ??= new CategoryResultsRenderer());
    if (renderer instanceof CategoryResultsRenderer) return renderer;

    throw new Error('Cannot have subcategories of ' + paths[paths.length - 1]);
  }
}

export { CategoryResultsRenderer };

import RESULTS from '../result.json';
import { selectId, TIME, truncateTo, type UnitData } from './units.ts';

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

export type CategoryResults = {
  [key: string]: CategoryResults | ChartData;
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
