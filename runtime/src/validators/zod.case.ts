import assertSimple from './assert-simple.spec.ts';
import z from 'zod';

const Id = z.int().min(0);
const DisplayName = z.optional(z.string().min(3).max(24));

const schema = z.object({
  id: Id,
  displayName: DisplayName,
  health: z.number().min(0).max(100),
  inventory: z
    .array(
      z.object({
        id: Id,
        displayName: DisplayName,
        tags: z.optional(z.array(z.string())),
      }),
    )
    .max(30),
});

assertSimple('zod', (o) => {
  schema.parse(o);
});
