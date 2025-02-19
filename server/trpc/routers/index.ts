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
			let start_time = `${new Date().toISOString()}`
			console.log(`started request at ${start_time}`)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			let end_time = `${new Date().toISOString()}`
			console.log(`finished request at ${end_time}`)
			return {
				greeting: `hello ${input?.text}, the last request started at ${start_time}`,
			}
		}),
})

// export type definition of API
export type AppRouter = typeof appRouter