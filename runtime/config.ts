export default {
  include: {
    category: (name: string) => name.startsWith('micro'),
    case: (categoryName: string, name: string) => true,
  } as const,
};
