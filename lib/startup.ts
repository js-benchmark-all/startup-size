export const startupFileContent = (file: string) => `
  import { now, start } from '${import.meta.dir}/startup.js';
  import ${JSON.stringify(file)};
  var end = now();
  console.log('$' + (end - start));
`;

export const readFileOutput = (fileOutput: string) => +fileOutput.slice(fileOutput.lastIndexOf('$') + 1);
