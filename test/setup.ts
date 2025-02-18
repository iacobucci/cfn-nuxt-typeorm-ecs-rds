import { beforeAll, beforeEach } from "vitest";
import { AppDataSource, initialize } from "~/server/utils/datasource";
import { setup, createPage } from '@nuxt/test-utils'

export const setupTest = async () => {
	await initialize();

	const entities = AppDataSource.entityMetadatas;
	const manager = AppDataSource.manager;

	for (const entity of entities) {
		console.log("Truncating", entity.tableName);
		await manager.query(`TRUNCATE TABLE "${entity.tableName}" CASCADE`);
	}
};

beforeAll(async () => {
	await setup({
		// Configurazioni Nuxt per i test
		runner: 'vitest',
		buildDir: '.nuxt/test',
		// Fai il build una sola volta
		build: true
	})
});

