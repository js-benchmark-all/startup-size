import { bench, do_not_optimize } from 'mitata';

const f = (re: RegExp, v: string) => {
  do_not_optimize(re.exec(v));
};

const it = (regexes: RegExp[], d: string[], ...cats: string[]) => {
  for (const re of regexes) {
    const fn = f.bind(null, re);

    for (const v of d)
      bench(`${cats.join('|')}|"${v}"|${re}`, function* () {
        yield {
          [0]: () => v,
          bench: fn,
        };
      }).gc('inner');
  }
};

it([/^a($)/, /^a$()/, /^a()$/], ['a', 'ab', 'ba', 'ajobajboajnm', 'jaoboobjmvndks'], 'url', 'end');

it(
  [/^a(.*)($)/, /^a(.*)($)$/, /^a(.*)($)$/, /^a(.*$)()$/, /^a(.*$)($)$/, /^a(.*)()$/],
  ['a', 'ab', 'ba', 'jajjbnakckmc', 'abanbancknc'],
  'url',
  'wildcard',
);
