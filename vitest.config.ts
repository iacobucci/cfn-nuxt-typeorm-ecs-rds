import { defineConfig } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import swc from 'unplugin-swc'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath } from 'node:url'

export default defineConfig({
	plugins: [tsconfigPaths(), swc.vite(), vue()],
	test: {
		setupFiles: './test/setup.ts',  // Percorso del file di setup
		sequence: {
			shuffle: false, // Esegue i test esattamente nell'ordine in cui sono definiti
			concurrent: false, // Disabilita l'esecuzione parallela
		},
		environment: 'jsdom',
		// Includi i file di test nell'ordine desiderato
		include: [
			'./test/**/*.test.ts'
		],
		// Configurazioni aggiuntive per Nuxt
		globals: true,
		root: fileURLToPath(new URL('./', import.meta.url)),
		fileParallelism: false
	},
})