import "reflect-metadata"
import { describe, it, beforeAll, afterAll, expect } from "vitest";

import { User } from "~/entities/User";
import { Message } from "~/entities/Message";

import { AppDataSource } from "~/server/utils/datasource";

try {
	if (!AppDataSource.isInitialized) {
		await AppDataSource.initialize()
		console.log('✅ Typeorm inizializzato', { type: AppDataSource.options.type, database: AppDataSource.options.database })
	}
} catch (error) {
	console.error('❌ Errore inizializzazione Typeorm', error)
	throw error
}

// clean database

afterAll(async () => {
	// Fetch all the entities
	await User.delete({});
	await Message.delete({});
});

// sintassi array destructuring, più concisa
let [mario, giuseppe, anna, maria, antonio]: User[] = []; // assegnamento orphan, inaggirabile

it("create sample users", async () => {
	mario = new User();
	mario.firstName = "Mario";
	mario.lastName = "Rossi";

	giuseppe = new User();
	giuseppe.firstName = "Giuseppe";
	giuseppe.lastName = "Verdi";

	anna = new User();
	anna.firstName = "Anna";
	anna.lastName = "Bianchi";

	maria = new User();
	maria.firstName = "Maria";
	maria.lastName = "Neri";

	antonio = new User();
	antonio.firstName = "Antonio";
	antonio.lastName = "Neri";

	mario.friends = [giuseppe, anna];
	giuseppe.friends = [mario];
	anna.friends = [anna];

	await AppDataSource.getRepository(User).save([mario, giuseppe, anna, maria, antonio]);

	expect(await User.count()).toBe(5);
});

let [m1, m2, m3, m4]: Message[] = [];

it("create sample messages", async () => {
	m1 = new Message();
	m1.from = mario;
	m1.to = giuseppe;
	m1.message = "Ciao Giuseppe";

	m2 = new Message();
	m2.from = giuseppe;
	m2.to = mario;
	m2.message = "Ciao Mario";

	m3 = new Message();
	m3.from = mario;
	m3.to = anna;
	m3.message = "Ciao Anna";

	m4 = new Message();
	m4.from = giuseppe;
	m4.to = anna;
	m4.message = "Ciao Anna";

	await AppDataSource.getRepository(Message).save([m1, m2, m3]);

	expect(await Message.count()).toBe(3);

});

it("query messages from mario", async () => {
	let messages = await Message.find({ where: { from: mario } });

	expect(messages.length).toBe(2);
	expect(messages[0].message).toBe("Ciao Giuseppe");
	expect(messages[1].message).toBe("Ciao Anna");
});


it("query messages from friends of giuseppe", async () => {
	// let messages = await Message.find({ where: { from: giuseppe.friends } });
});