import typescript from '@rollup/plugin-typescript';
import "reflect-metadata";

export default defineNuxtConfig({
	compatibilityDate: '2025-02-12',
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
		esbuild: false,
		plugins: [typescript(
			{
				tsconfig: 'tsconfig.json',
				target: "ES2022",
				module: "ESNext",
				experimentalDecorators: true,
				emitDecoratorMetadata: true,
				strictPropertyInitialization: false,
			}
		)],
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
	}
})