import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~/server/trpc/routers'

export default defineNuxtPlugin(() => {
	/**
	 * createTRPCNuxtClient adds a `useQuery` composable
	 * built on top of `useAsyncData`.
	 */

	// Questo client, costruito sopra lo stack di universal rendering di Nuxt, è completamente typesafe

	const client = createTRPCNuxtClient<AppRouter>({
		links: [
			httpBatchLink({
				url: '/api/trpc',
			}),
		],
	})

	return {
		provide: {
			client,
		},
	}
})