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

interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  }
type CategoryResults = {
  [key: string]:
    | CategoryResults
    | ChartData
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

export class MarkdownContent {
  tableOfContent: string = '# Results\n';
  results: string = '\n';

  _render(results: CategoryResults, idx: number = 2) {
    let tableIdx = 1;

    for (const key in results) {
      const result = results[key];
      this.tableOfContent += `${'  '.repeat(idx - 2)}${tableIdx++}. ${key}\n`;
      this.results += `${'#'.repeat(idx)} ${key}\n`;

      if (Array.isArray(result.labels))
        this.results += MarkdownContent.renderChart(result as any);
      else
        this._render(result as any, idx + 1);
    }
  }

  render(results: CategoryResults) {
    this._render(results);
    return this.tableOfContent + this.results;
  }

  static SYMBOLS = ["█", "▓", "▒", "░", "■", "●", "▲", "◆"];
  static WIDTH = 50;

  static renderChart(chart: ChartData) {
    let out = '';

    // Find global max for scaling
    const allValues = chart.datasets.flatMap(d => d.data);
    const maxValue = Math.max(...allValues);

    for (let i = 0; i < chart.datasets.length; i++) {
      const d = chart.datasets[i];
      out += ` ${this.SYMBOLS[i % this.SYMBOLS.length]}  \`${d.label}\`\n`;
    }
    out += "\n";

    // Render bars
    for (let labelIndex = 0; labelIndex < chart.labels.length; labelIndex++) {
      const label = chart.labels[labelIndex];
      out += `\`${label}\`:\n`;

      for (let dsIndex = 0; dsIndex < chart.datasets.length; dsIndex++) {
        const value = chart.datasets[dsIndex].data[labelIndex];
        const len = Math.round((value / maxValue) * this.WIDTH);
        const bar = this.SYMBOLS[dsIndex % this.SYMBOLS.length].repeat(len || 1);

        out += `  ${bar}  ${value.toFixed(2)}\n`;
      }

      out += "\n";
    }

    return out;
  }
}
