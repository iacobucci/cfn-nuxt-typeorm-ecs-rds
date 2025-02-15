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
					},
				}
			}
		},
	},

	vite: {
		esbuild: false,
		plugins: [typescript(
			{
				tsconfig: 'tsconfig.json',
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
				experimentalDecorators: true,
				emitDecoratorMetadata: true,
				strictPropertyInitialization: false,
			}
		}
	}
})