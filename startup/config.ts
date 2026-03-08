export default {
  runs: 250,
  include: {
    category: (name: string) => true,
    case: (categoryName: string, name: string) => true,
  } as const,
};

// Utils
export type Cases = Record<string, string>;
export interface CasesConfig {
  (runtime: string): {
    cases: Cases;
  };
}

export const defineCases = (config: CasesConfig): CasesConfig => config;
