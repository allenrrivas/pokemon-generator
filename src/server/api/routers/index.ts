import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PokemonClient } from "pokenode-ts";

// export const exampleRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),
//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.db.example.findMany();
//   }),
// });

export const pokeRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const api = new PokemonClient();

      const pokemon = await api.getPokemonById(input.id);
      return pokemon;
    }),
});
