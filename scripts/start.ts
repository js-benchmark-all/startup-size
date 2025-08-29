import INFO from "../.out/info.json";
import { utils, config, format } from "../lib/index.ts";

import __RESULT from '../result.json';
const STARTUP_RESULT = __RESULT['startup time'] ?? {} as any;

let running = false;
const run = async (
  runtime: (typeof config.RUNTIMES)[keyof typeof config.RUNTIMES],
) => {
  const ID = (await runtime.id()).trim();
  console.log("runtime:", format.name(ID));

  // @ts-ignore
  const results = (STARTUP_RESULT[ID] = {});

  for (const categoryName in INFO) {
    console.log("  category:", format.name(categoryName));

    const category = INFO[categoryName as keyof typeof INFO];
    const categoryResults: {
      caseName: string;
      values: number[];
      total: number;
    }[] = [];

    for (const caseName in category) {
      console.log("    case:", format.name(caseName));

      const values = [];
      for (
        let i = 0,
          caseInfo: string = category[caseName as keyof typeof category];
        i < config.RUNS;
        i++
      ) {
        // Block until a process is done
        while (running) await 0;
        running = true;

        const proc = runtime.run(caseInfo);
        for await (const output of proc.stdout) {
          const stringOutput = Buffer.from(output).toString();

          if (stringOutput.startsWith(utils.LOG_PREFIX)) {
            values.push(+stringOutput.slice(utils.LOG_PREFIX.length));
            break;
          }
        }
        proc.kill();

        // Unblock
        running = false;
      }

      // Add to results
      categoryResults.push({
        caseName,
        values,
        total: values.reduce((a, b) => a + b, 0),
      });
    }

    categoryResults.sort((a, b) => a.total - b.total);

    // @ts-ignore
    results[categoryName] = {
      labels: categoryResults.map((v) => v.caseName),
      datasets: [
        {
          label: "average (ms)",
          data: categoryResults.map((v) => utils.nsToMs(v.total / config.RUNS)),
        },
        ...[50, 75, 99, 999].map((p) => {
          const label = `p${p} (ms)`;
          p = +`0.${p}`;
          return {
            label,
            data: categoryResults.map((v) =>
              utils.nsToMs(utils.percentile(v.values, p)),
            ),
          };
        }),
      ],
    };
  }
};

const RUNTIME =
  config.RUNTIMES[process.argv[2] as keyof typeof config.RUNTIMES];
if (RUNTIME != null) await run(RUNTIME);
else for (const runtime of Object.values(config.RUNTIMES)) await run(runtime);

await utils.writeResult("startup time", STARTUP_RESULT);
