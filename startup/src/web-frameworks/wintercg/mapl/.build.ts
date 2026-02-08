import 'runtime-compiler/config/loader/build';
import { getStatements } from 'runtime-compiler';

import { mkdirSync } from 'node:fs';

import { build } from 'rolldown';

const OUTPUT = import.meta.dir + '/.out/';
try {
  mkdirSync(OUTPUT);
} catch {}

const buildAOT = async (target: string) => {
  const file = `${import.meta.dir}/target/${target}.ts`;
  await import(file);

  const outputFile = `${OUTPUT}${target}.js`;
  const statements = getStatements();

  await Bun.write(
    outputFile,
    `
    export * from '${file}';
    import { $ } from 'runtime-compiler';
    ${statements}
  `,
  );

  await Bun.write(
    `${OUTPUT}${target}.d.ts`,
    `
    export * from '${file}';
  `,
  );

  await build({
    input: outputFile,
    output: {
      file: outputFile,
      codeSplitting: false,
      minify: {
        mangle: false,
        codegen: {
          removeWhitespace: false,
        },
      },
    },
    plugins: [
      {
        name: 'replace',
        resolveId: (id) => (id === 'runtime-compiler/config' ? '\0config' : null),
        load: (id) =>
          id === '\0config'
            ? `
            export const isHydrating = true;
            export const onlyBuild = false;
          `
            : null,
      },
    ],
  });
};

await buildAOT('bun');
await buildAOT('deno');
await buildAOT('generic');
