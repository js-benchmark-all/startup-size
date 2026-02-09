export const startupFileContent = (file: string, runtime: string) => `
  import { now, start } from '${import.meta.dir}/utils/startup${runtime.startsWith('node') ? '-node' : ''}.js';
  export * from ${JSON.stringify(file)};
  var end = now();
  console.log('$' + (end - start));
`;

export const runtimeFileContent = (file: string) => `
  import { run, do_not_optimize } from 'mitata';
  import { filterProps } from '${import.meta.dir}/utils/runtime.js';

  (async () => {
    await import(${JSON.stringify(file)});
    const result = await run({ format: { json: { debug: false } } });
    console.log('$' + JSON.stringify(filterProps(result)));
  })();
`;

export const readFileOutput = (fileOutput: string) =>
  fileOutput.slice(fileOutput.lastIndexOf('$') + 1);
