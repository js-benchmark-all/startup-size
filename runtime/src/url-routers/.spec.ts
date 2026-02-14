import { bench, do_not_optimize } from 'mitata';
import { rand } from '../../../lib/rand.ts';

const assertEq = <T>(value: T, expected: T, caseName: string) => {
  if (value !== expected)
    throw new Error(`[${caseName}] Expected ${JSON.stringify(expected)}, recieved: ${JSON.stringify(value)}`);
};

export default (name: string, fn: (input: { method: string; url: string }) => string): void => {
  const addStaticCase = (method: string, url: string, id: string) => {
    const obj = { method, url };
    assertEq(fn(obj), id, `${method} "${url}"`);

    // add the ability to nest multiple subcategories in start.ts later
    bench(`${method} "${url}"/${name}`, function* () {
      yield {
        [0]: () => obj,
        bench: fn,
      };
    }).gc('inner');
  };

  const addDynamicCase = (
    method: string,
    url: string,
    gen: () => { url: string; result: string },
  ) => {
    {
      const o = gen();
      const obj = { method, url: o.url };
      assertEq(fn(obj), o.result, `${method} "${url}"`);
    }

    // add the ability to nest multiple subcategories in start.ts later
    bench(`${method} "${url}"/${name}`, function* () {
      yield {
        [0]: () => ({ method, url: gen().url }),
        bench: fn,
      };
    }).gc('inner');
  };

  // Deopt method access
  for (const method of ['PATCH', 'OPTIONS', 'PUT', 'DELETE', 'TRACE', 'SUBSCRIBE', 'ANY', 'ALL'])
    do_not_optimize(fn({ method, url: '/' }));

  // Deopt path access
  for (const url of ['/', '/stat', '/a', '/k/c', '/skajb', '/at', '/kinda/long/route', '/hello'])
    do_not_optimize(fn({ method: 'GET', url }));

  addStaticCase('GET', '/user', '0');
  addStaticCase('GET', '/user/comments', '1');
  addStaticCase('GET', '/user/avatar', '2');
  addDynamicCase('GET', '/user/lookup/username/:username', () => {
    const username = rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/user/lookup/username/${username}`,
      result: '3' + username,
    };
  });
  addDynamicCase('GET', '/user/lookup/email/:email', () => {
    const email = rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/user/lookup/email/${email}`,
      result: '4' + email,
    };
  });
  addDynamicCase('GET', '/event/:id', () => {
    const id = rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/event/${id}`,
      result: '5' + id,
    };
  });
  addDynamicCase('GET', '/event/:id/comments', () => {
    const id = rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/event/${id}/comments`,
      result: '6' + id,
    };
  });
  addDynamicCase('POST', '/event/:id/comment', () => {
    const id = rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/event/${id}/comment`,
      result: '7' + id,
    };
  });
  addDynamicCase('GET', '/map/:location/event', () => {
    const location = rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/map/${location}/event`,
      result: '8' + location,
    };
  });
  addStaticCase('GET', '/status', '9');
  addStaticCase('GET', '/very/deeply/nested/route/hello/there', '10');
  addDynamicCase('GET', '/static/*', () => {
    const rest =
      (rand.chance(0.5) ? rand.string(rand.ENGLISH_ALPHABET, 3) + '/' : '') +
      rand.string(rand.ENGLISH_ALPHABET, 8);
    return {
      url: `/static/${rest}`,
      result: '11' + rest,
    };
  });
};
