export const gc = (() => {
  try {
    return (Bun.gc(true), () => Bun.gc(true));
  } catch {}
  try {
    return (globalThis.gc(), () => globalThis.gc());
  } catch {}
  try {
    return (globalThis.__gc(), () => globalThis.__gc());
  } catch {}
  return () => new Uint8Array(2 ** 30);
})();

const $ = {
  _: null,
  __() {
    throw $._;
  },
};

export const side_effect = (v) => ($._ = v);

export const now = (() => {
  try {
    Bun.nanoseconds();
    return Bun.nanoseconds;
  } catch {}
  try {
    const now = performance.now.bind(performance);
    now();
    return () => 1e6 * now();
  } catch {
    return () => 1e6 * Date.now();
  }
})();

{
  // Opt now
  let v = 0;
  for (let i = 0; i < 1e3; i++) v ^= now();
  side_effect(v);
}
