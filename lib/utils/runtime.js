/**
 * @param {Awaited<ReturnType<typeof import('mitata')['run']>>} result
 * @returns {import('mitata').trial[]}
 */
export const filterProps = (result) =>
  result.benchmarks.map((b) => {
    b.kind = b.args = b.group = b.baseline = b.style = undefined;
    b.runs = b.runs.filter((run) => run.stats != null);
    b.runs.forEach((run) => {
      const stats = run.stats;
      stats.debug =
        stats.ticks =
        stats.counters =
        stats.kind =
        stats.min =
        stats.max =
        stats.avg =
        stats.p25 =
        stats.p50 =
        stats.p75 =
        stats.p99 =
        stats.p999 =
          undefined;
    });
    return b;
  });
