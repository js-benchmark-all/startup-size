export default {
  runs: 200,
  include: {
    category: (name: string) => true,
    case: (categoryName: string, name: string) => true,
  } as const,
};

export type Cases = Record<string, string>;
export interface CasesConfig {
  (runtime: string): {
    cases: Cases;
  };
}
export const defineCases = (config: CasesConfig): CasesConfig => config;
