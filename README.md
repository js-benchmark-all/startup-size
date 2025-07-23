Startup time & size benchmarks for libraries.
```sh
# Build test suites
bun prep

# Benchmark after build
bun bench:node # Benchmark with node
bun bench:bun # Benchmark with bun
```

Previous results are in [results](./results) directory.

To filter out tests, see [filters.ts](./lib/filters.ts).
