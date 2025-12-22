export default {
  include: {
    category: (name: string) => true,
    case: (categoryName: string, name: string) => true,
  } as const,
};
