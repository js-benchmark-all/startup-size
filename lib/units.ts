export interface UnitData {
  units: string[],
  sep: number;
};
export const TIME: UnitData = {
  units: ['ns', 'µs', 'ms', 's'],
  sep: 1000
};
export const BYTE: UnitData = {
  units: ['b', 'kb', 'mb'],
  sep: 1000
};
