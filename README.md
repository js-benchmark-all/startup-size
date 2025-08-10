Startup time & size benchmarks for libraries.
```sh
# Build test suites
bun prep

# Benchmark after build
bun bench:node # Benchmark with node
bun bench:deno # Benchmark with deno
bun bench:bun # Benchmark with bun
bun bench:all # Benchmark all runtimes
```

Interactive results are on https://js-benchmark-all.pages.dev/startup-size.

Raw results are in [results](./.results) directory.

To filter out tests, see [filters.ts](./lib/filters.ts).
