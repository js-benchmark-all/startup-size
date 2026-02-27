import { bench, do_not_optimize } from 'mitata';

const itd =
  (d: string[], ...cats: string[]) =>
  (re: RegExp) => {
    bench(`${cats.join('|')}|${re}`, function* () {
      yield {
        [0]: () => d,
        bench: (arr: string[]) => {
          for (let i = 0; i < arr.length; i++) do_not_optimize(re.exec(arr[i]));
        },
      };
    });
  };

{
  const it = itd(['a', 'ab', 'ac', 'a', 'auukc', 'a', 'a', 'ad', 'ax', 'a'], 'url', 'end');

  it(/^a($)/);
  it(/^a$()/);
  it(/^a()$/);
  it(/^a($)$/);
  it(/^a$($)$/);
}

{
  const it = itd(
    [
      'akbajkm',
      'akckbkal',
      'bkavja',
      'a',
      'jbabuck',
      'ajhkkcnksajhfigib',
      'bohbohivnihggg',
      'umvmdksjv',
      'kbjhgsaamm',
    ],
    'url',
    'wildcard',
  );

  it(/^a(.*)($)/);
  it(/^a(.*)($)$/);
  it(/^a(.*$)($)/);
  it(/^a(.*$)()$/);
  it(/^a(.*$)($)$/);
  it(/^a(.*)()$/);
}
