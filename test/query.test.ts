import "reflect-metadata"
import { describe, it, beforeAll, afterAll, expect } from "vitest";

import { User } from "~/entities/User";
import { Message } from "~/entities/Message";

import { AppDataSource, initialize } from "~/server/utils/datasource";
import { In } from "typeorm";

await initialize();

beforeAll(async () => {
	await AppDataSource.getRepository(User).delete({});
	await AppDataSource.getRepository(Message).delete({});
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

	mario.following = [giuseppe, anna];
	giuseppe.following = [mario, anna];
	anna.following = [mario];

	await AppDataSource.getRepository(User).save([mario, giuseppe, anna, maria, antonio]);

	expect(await User.count()).toBe(5);
});

let [m1, m2, m3, m4]: Message[] = [];

it("create sample messages", async () => {
	m1 = new Message();
	m1.from = mario;
	m1.to = giuseppe;
	m1.content = "Ciao Giuseppe";

	m2 = new Message();
	m2.from = giuseppe;
	m2.to = mario;
	m2.content = "Ciao Mario";

	m3 = new Message();
	m3.from = mario;
	m3.to = anna;
	m3.content = "Ciao Anna";

	m4 = new Message();
	m4.from = giuseppe;
	m4.to = anna;
	m4.content = "Ciao Anna";

	await AppDataSource.getRepository(Message).save([m1, m2, m3]);

	expect(await Message.count()).toBe(3);

});

it("query messages from mario", async () => {
	let messages = await Message.find({
		relations: { from: true },
		where: { from: { id: mario.id } } // usando l'id si evita una ricorsione infinita
	});

	expect(messages.length).toBe(2);
	expect(messages[0].content).toBe("Ciao Giuseppe");
	expect(messages[1].content).toBe("Ciao Anna");
});

it("query messages to anna from users that anna is following", async () => {
	let messages = await Message.find({
		relations: { to: true, from: true },
		where: {
			to: { id: anna.id },
			from: In(anna.following.map(f => f.id))
		}
	});

	expect(messages.length).toBe(1);
	expect(messages[0].content).toBe("Ciao Anna");
	expect(messages[0].from.id).toBe(mario.id);
});

it("load user with their followed", async () => {

	let user = await User.findOne({ where: { id: mario.id }, relations: { following: true } });

	if (!user) {
		throw new Error("User not found");
	}

	expect(user.following.length).toBe(2);
	expect(user.following[0].id).toBe(giuseppe.id);
	expect(user.following[1].id).toBe(anna.id);
});