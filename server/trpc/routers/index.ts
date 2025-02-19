import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
	clog: publicProcedure
		.input(
			z.object({
				text: z.string().nullish(),
			}),
		)
		.query(async ({ input }) => {
			// wait for 1 second
			await new Promise((resolve) => setTimeout(resolve, 1000))
			console.log("clog")
			return {
				greeting: `hello ${input?.text}, its ${new Date().toISOString()}`,
			}
		}),
})

// export type definition of API
export type AppRouter = typeof appRouter