import type { CategoryResults, ChartData } from './lib/result.ts';
import RESULT from './result.json';

export class MarkdownContent {
  tableOfContent: string = '# Results\n';
  results: string = '\n';

  _render(results: CategoryResults, idx: number = 2) {
    let tableIdx = 1;

    for (const key in results) {
      const result = results[key];
      const headerId = `${idx}_${btoa(key)}`;

      this.tableOfContent += `${'    '.repeat(idx - 2)}${tableIdx++}. [\`${key}\`](#${headerId})\n`;
      this.results += `<a name="${headerId}">\n\n${'#'.repeat(idx)} ${key}\n`;

      if (Array.isArray(result.labels)) this.results += MarkdownContent.renderChart(result as any);
      else this._render(result as any, idx + 1);
    }
  }

  render(results: CategoryResults) {
    this._render(results);
    return this.tableOfContent + this.results;
  }

  static SYMBOLS = [
    '█', '▓', '▒', '░'
  ];
  static WIDTH = 96;

  static renderChart(chart: ChartData) {
    let out = '```';

    // Find global max for scaling
    const allValues = chart.datasets.flatMap((d) => d.data);
    const maxValue = Math.max(...allValues);

    for (let i = 0; i < chart.datasets.length; i++) {
      const d = chart.datasets[i];
      out += `\n ${this.SYMBOLS[i % this.SYMBOLS.length]}  ${d.label}`;
    }

    // Render bars
    for (let labelIdx = 0; labelIdx < chart.labels.length; labelIdx++) {
      const label = chart.labels[labelIdx];
      out += `\n\n ${labelIdx + 1}. ${label}`;

      for (let dsIdx = 0; dsIdx < chart.datasets.length; dsIdx++) {
        const value = chart.datasets[dsIdx].data[labelIdx];
        out += `\n    ${this.SYMBOLS[dsIdx % this.SYMBOLS.length].repeat(Math.floor(value * this.WIDTH / maxValue) + 1)}  ${+value.toFixed(2)}`;
      }
    }

    return out + '\n```\n';
  }
}

Bun.write('RESULTS.md', new MarkdownContent().render(RESULT));
