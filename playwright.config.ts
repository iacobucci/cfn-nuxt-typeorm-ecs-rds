import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run dev',
		port: 3000,
		reuseExistingServer: !process.env.CI,
	},
	testDir: './test/playwright',
	use: {
		trace: 'on-first-retry',
	},
});