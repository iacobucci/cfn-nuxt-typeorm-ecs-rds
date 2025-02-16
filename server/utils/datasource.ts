import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "~/entities/User";
import type { DataSourceOptions } from "typeorm";

// Inserire le classi delle entità qui
let entities = [User];

let options: DataSourceOptions;

if (process.env.NODE_ENV === "sqlite") {
	options = {
		type: "sqlite",
		database: "database.sqlite",
		synchronize: true,
		logging: false,
		entities,
		migrations: [],
		subscribers: [],
	}
}

if (process.env.NODE_ENV === "development") {
	options = {
		type: "postgres",
		host: "localhost",
		database: "test",
		port: 5432,
		username: "test",
		password: "test",
		ssl: false,
		synchronize: true,
		logging: true,
		entities,
		migrations: [],
		subscribers: [],
	}
}

else {
	options = {
		type: "postgres",
		host: process.env.DB_HOSTNAME,
		database: process.env.DB_NAME,
		port: parseInt(process.env.DB_PORT || "5432"),
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		ssl: { rejectUnauthorized: false },
		synchronize: true,
		logging: true,
		entities,
		migrations: [],
		subscribers: [],
	}
}

export const AppDataSource = new DataSource(options);
