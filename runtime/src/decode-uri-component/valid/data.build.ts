const lengths = [1, 2, 3, 4, 5];
const words = [
  'state',
  'package',
  'valid',
  'name',
  'phrases',
  'suite',
  'length',
  'test',
  'script',
  'otherwise',
  'publish',
  'suite',
  'invalid',
  'random',
  'stringify',
  'home',
  'readme',
  'tsconfig',
  'json',
];

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const createRandomString = (): string =>
  encodeURIComponent(
    pick(words) +
      new Array(pick(lengths))
        .fill(null)
        .map(
          () =>
            pick(words) + String.fromCharCode(500 + Math.round(Math.random() * 1000)) + pick(words),
        )
        .join(''),
  );

const valid = Array.from({ length: 500 }, createRandomString);
valid.push('%000');

await Bun.write(
  `${import.meta.dir}/data.json`,
  JSON.stringify(valid, null, 2),
);
