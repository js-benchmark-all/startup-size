import { run } from 'mitata';

export const startupFileContent = (file: string) => `
  import { now, start } from '${import.meta.dir}/startup.js';
  import ${JSON.stringify(file)};
  var end = now();
  console.log('$' + (end - start));
`;

export const runtimeFileContent = (file: string) => `
  import { run } from 'mitata';
  import ${JSON.stringify(file)};

  run({ format: { json: { debug: false } } }).then((result) => {
    console.log('$' + JSON.stringify(result.benchmarks.map(
      (b) => {
        b.kind = b.args = b.group = b.baseline = b.style = undefined;
        b.runs = b.runs.filter((run) => run.stats != null);
        b.runs.forEach((run) => {
          const stats = run.stats;
          stats.debug = stats.ticks = stats.counter
            = stats.kind = stats.min = stats.max
            = stats.avg = stats.p25 = stats.p50
            = stats.p75 = stats.p99 = stats.p999 = undefined;
        });
        return b;
      }
    )));
  });
`;

export const readFileOutput = (fileOutput: string) =>
  fileOutput.slice(fileOutput.lastIndexOf('$') + 1);
