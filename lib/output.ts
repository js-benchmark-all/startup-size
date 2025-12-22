import { run } from 'mitata';

export const startupFileContent = (file: string) => `
  import { now, start } from '${import.meta.dir}/utils/startup.js';
  import ${JSON.stringify(file)};
  var end = now();
  console.log('$' + (end - start));
`;

export const runtimeFileContent = (file: string) => `
  import { run } from 'mitata';
  import { filterProps } from '${import.meta.dir}/utils/runtime.js';
  import ${JSON.stringify(file)};

  run({ format: { json: { debug: false } } }).then((result) => {
    console.log('$' + JSON.stringify(filterProps(result)));
  });
`;

export const readFileOutput = (fileOutput: string) =>
  fileOutput.slice(fileOutput.lastIndexOf('$') + 1);
