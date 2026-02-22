import { math } from "./math.ts";

/**
 * Describe a list of units and how to convert between them
 *
 * @example
 * const time = {
 *   units: ['ns', 'µs', 'ms', 's'],
 *   divs: [1, 1e3, 1e6, 1e9]
 * };
 *
 * const byte = {
 *   units: ['b', 'kb', 'mb', 'gb'],
 *   divs: [1, 1e3, 1e6, 1e9]
 * };
 */
export interface UnitData {
  units: string[];
  divs: number[];
}

export const selectId = (u: UnitData, value: number): number => {
  let idx = 0;
  while (idx < u.units.length - 1 && value > (u.divs[idx + 1] * 3 / 2))
    idx++;
  return idx;
}

export const truncateTo = (u: UnitData, id: number, value: number): number => math.truncate(value / u.divs[id]);
export const convertTo = (u: UnitData, id: number, value: number): string => truncateTo(u, id, value) + u.units[id];
export const convertAuto = (u: UnitData, value: number): string => convertTo(u, selectId(u, value), value);

export const TIME: UnitData = {
  units: ['ns', 'µs', 'ms', 's'],
  divs: [1, 1e3, 1e6, 1e9]
};
export const BYTE: UnitData = {
  units: ['b', 'kb', 'mb', 'gb'],
  divs: [1, 1e3, 1e6, 1e9]
};
