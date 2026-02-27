import { run, bench, summary, do_not_optimize } from 'mitata';

const itd = (name: string, d: string[]) => (re: RegExp) => {
  bench(name + '/' + re.toString(), function* () {
    yield {
      [0]: () => d,
      bench: (arr: string[]) => {
        for (let i = 0; i < arr.length; i++)
          re.exec(arr[i]);
      },
    }
  })
}

summary(() => {
  const it = itd('url regexp/end', [
    'a',
    'ab',
    'ac',
    'a',
    'a',
    'a',
    'ad',
    'ax',
    'a'
  ]);

  it(/^a($)/);
  it(/^a$()/);
  it(/^a()$/);
  it(/^a($)$/);
  it(/^a$($)$/);
});

summary(() => {
  const it = itd('url regexp/wildcard', [
    'akbajkm',
    'akckbkal',
    'bkavja',
    'a',
    'jbabuck',
    'ajhkkcnksajhfigib',
    'bohbohivnihggg',
    'umvmdksjv',
    'kbjhgsaamm'
  ]);

  it(/^a(.*)($)/);
  it(/^a(.*)($)$/);
  it(/^a(.*$)($)/);
  it(/^a(.*$)()$/);
  it(/^a(.*$)($)$/);
  it(/^a(.*)()$/);
});

run();
