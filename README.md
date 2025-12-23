Benchmark startup time, minified size, gzipped size and runtime.

```sh
# Install all dependencies
bun i

# Run startup time and sizes benchmark
./startup.sh

# Run runtime benchmark
./runtime.sh
```

## Methodology
- Each `.case.ts` is bundled & minified with [`rolldown`](https://rolldown.rs), their content is preprocessed before bundling with [`output.ts`](./lib/output.ts).
+ In runtime benchmark, each case can register sub-categories.
+ Startup time case files can't as they must not introduce noises.
- Runtime benchmarks are done with [`mitata`](https://github.com/evanwashere/mitata).
- Startup times are directly measured in the running code (see startup preprocessed code in [`output.ts`](./lib/output.ts)).
- [Results](./result.json) are ChartJS compatible data.
