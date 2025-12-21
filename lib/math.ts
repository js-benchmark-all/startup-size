export const math = {
  /**
   * p? percentile
   */
  percentile: (arr: number[], p: number) => {
    const n = arr.length;

    const index = p * (n - 1);
    const lower = Math.floor(index);
    const upper = Math.ceil(index);

    if (upper >= n) return arr[lower];

    const weight = index - lower;
    return arr[lower] * (1 - weight) + arr[upper] * weight;
  },

  /**
   * Relative standard deviation
   */
  rsd: (arr: number[]) => {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;

    return Math.sqrt(
      arr.reduce(
        (prevSum, cur) => prevSum + (cur - mean) * (cur - mean),
        0
      ) / arr.length
    ) / mean;
  }
};
