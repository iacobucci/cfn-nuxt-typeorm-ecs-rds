// import typescript from '@rollup/plugin-typescript';
import "reflect-metadata";

export default defineNuxtConfig({
	compatibilityDate: '2025-02-12',

	modules:
		["@nuxtjs/tailwindcss", 'shadcn-nuxt'],

	shadcn: {
		/**
						* Prefix for all the imported component
						*/
		prefix: '',
		/**
						* Directory that the component lives in.
						* @default "./components/ui"
						*/
		componentDir: './components/ui'
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

	typescript: {
		tsConfig:
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
		enabled: true
	}
})
