import { bench, do_not_optimize } from 'mitata';

const itd =
  (d: string[], ...cats: string[]) =>
  (re: RegExp) => {
    const f = (v: string) => {
      do_not_optimize(re.exec(v));
    };

    for (const v of d)
      bench(`${cats.join('|')}|"${v}"|${re}`, function* () {
        yield {
          [0]: () => v,
          bench: f
        };
      }).gc('inner');
  };

{
  const it = itd(
    [
      'a',
      'ab',
      'ba',
      'ajobajboajnm',
      'jaoboobjmvndks'
    ],
    'url',
    'end',
  );

  it(/^a($)/);
  it(/^a$()/);
  it(/^a()$/);
  it(/^a($)$/);
  it(/^a$($)$/);
}

{
  const it = itd(
    [
      'a',
      'ab',
      'ba',
      'jajjbnakckmc',
      'abanbancknc'
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
