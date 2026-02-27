import { run, bench, do_not_optimize } from 'mitata';

const itd = (name: string, d: string[]) => (re: RegExp) => {
  bench(`regex/${name}/${re}`, function* () {
    yield {
      [0]: () => d,
      bench: (arr: string[]) => {
        for (let i = 0; i < arr.length; i++)
          do_not_optimize(re.exec(arr[i]));
      },
    }
  })
}

{
  const it = itd('url/end', [
    'a',
    'ab',
    'ac',
    'a',
    'auukc',
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
};

{
  const it = itd('url/wildcard', [
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
};

run();
