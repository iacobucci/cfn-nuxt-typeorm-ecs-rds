export default defineEventHandler(async (event) => {
	const entities = AppDataSource.entityMetadatas;
	const manager = AppDataSource.manager;

	for (const entity of entities) {
		console.log("Truncating", entity.tableName);
		await manager.query(`TRUNCATE TABLE "${entity.tableName}" CASCADE`);
	}

	return {
		status: 200,
		body: {
			message: "Database cleared"
		}
	}
});