export const rand = {
  ENGLISH_ALPHABET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  int: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
  float: (min: number, max: number) => Math.random() * (max - min) + min,
  item: <T>(list: Record<number, T> & { length: number }): T => list[
    Math.floor(Math.random() * list.length)
  ],
  string: (charset: string, length: number) => {
    let str = '';
    while (length-- > 0) str += rand.item(charset);
    return str;
  },
  chance: (n: number) => Math.random() < n,
  array: <T>(size: number, cb: () => T): T[] => new Array(size).fill(null).map(cb)
};
