import { run } from "mitata";

export const startupFileContent = (file: string) => `
  import { now, start } from '${import.meta.dir}/startup.js';
  import ${JSON.stringify(file)};
  var end = now();
  console.log('$' + (end - start));
`;

export const runtimeFileContent = (file: string) => `
  import { run } from 'mitata';
  import ${JSON.stringify(file)};

  run({ format: 'json' }).then((result) => {
    console.log('$' + JSON.stringify(result.benchmarks));
  });
`;

export const readFileOutput = (fileOutput: string): string => fileOutput.slice(fileOutput.lastIndexOf('$') + 1);
