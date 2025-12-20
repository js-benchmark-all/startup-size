export const config = {
  runs: 200,
  include: {
    category: (name: string) => true,
    case: (categoryName: string, name: string) => true
  } as const
};
