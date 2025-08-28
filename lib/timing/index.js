globalThis.__current = (() => {
  try {
    // bun
    Bun.nanoseconds();
    return Bun.nanoseconds;
  } catch {}

  try {
    // jsc
    $.agent.monotonicNow();
    return () => 1e6 * $.agent.monotonicNow();
  } catch {}

  try {
    // 262 agent
    $262.agent.monotonicNow();
    return () => 1e6 * $262.agent.monotonicNow();
  } catch {}

  try {
    // node/deno/... (v8 inline, anti-deopts)
    const now = performance.now.bind(performance);

    now();
    return () => 1e6 * now();
  } catch {
    return () => 1e6 * Date.now();
  }
})();

let v = 0;
for (let i = 0; i < 1000; i++) v ^= __current();
if (v === 123456789) console.log();
