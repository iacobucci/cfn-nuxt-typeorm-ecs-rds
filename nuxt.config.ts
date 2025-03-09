import typescript from '@rollup/plugin-typescript';
import "reflect-metadata";

export default defineNuxtConfig({
	compatibilityDate: '2025-02-12',

	features: {
		inlineStyles: false,
	},

	modules:
		["@nuxtjs/tailwindcss", 'shadcn-nuxt', 'nuxt-server-fn',],

	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},

	build: {
		transpile: ['trpc-nuxt']
	},

	nitro: {
		esbuild: {
			options: {
				tsconfigRaw: {
					compilerOptions: {
						experimentalDecorators: true,
						target: "ES2022",
					},
				}
			}
		}
	},

	vite: {
		server: {
			hmr: true,
		},
		esbuild: false, // necessario per l'utilizzo dei decoratori typeORM
		// plugins: [typescript( // necessario per usare gli stub di typeORM nel client
		// 	{
		// 		tsconfig: 'tsconfig.json',
		// 		target: "ES2022",
		// 		module: "ESNext",
		// 		experimentalDecorators: true,
		// 		emitDecoratorMetadata: true,
		// 		strictPropertyInitialization: false,
		// 	}
		// )],
	},

	typescript: {
		tsConfig: // necessario come workaround per vue-language-server
		{
			compilerOptions: {
				target: "ES2022",
				module: "ESNext",
				experimentalDecorators: true,
				emitDecoratorMetadata: true,
				strictPropertyInitialization: false,
			}
		}
	},

	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	}
})