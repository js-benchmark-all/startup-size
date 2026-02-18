import { bench, do_not_optimize } from 'mitata';
import data from './data.json';

export default (name: string, decode: (str: string) => string | undefined | null) => {
  for (let i = 0; i < data.length; i++)
    if (decode(data[i]) != null) throw new Error('Expected null or undefined');

  bench('invalid/' + name, function* () {
    yield {
      [0]: () => data,
      bench: (d: typeof data) => {
        for (let i = 0; i < d.length; i++) do_not_optimize(decode(d[i]));
      },
    };
  }).gc('inner');
};
