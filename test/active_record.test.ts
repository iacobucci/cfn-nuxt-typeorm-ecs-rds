import { describe, it, beforeAll, afterAll, beforeEach, afterEach, expect } from "vitest";
import { setupTest } from "~/test/setup";

import { User } from "~/entities/User";
import { Message } from "~/entities/Message";

import { AppDataSource, initialize } from "~/server/utils/datasource";
import { In } from "typeorm";


beforeAll(setupTest);

let [mario, giuseppe, anna, maria, antonio]: User[] = [];

it("create sample users", async () => {
	mario = new User();
	mario.username = "mario";
	await mario.save();

	giuseppe = new User();
	giuseppe.username = "giuseppe";
	await giuseppe.save();

	anna = new User();
	anna.username = "anna";
	await anna.save();

	maria = new User();
	maria.username = "maria";
	await maria.save();

	antonio = new User();
	antonio.username = "antonio";
	await antonio.save();

	mario.following = [giuseppe, anna];
	giuseppe.following = [mario, anna];
	anna.following = [mario];

	await mario.save();
	await giuseppe.save();
	await anna.save();

	expect(await User.count()).toBe(5);
});

let [m1, m2, m3, m4]: Message[] = [];

it("create sample messages", async () => {
	m1 = new Message();
	m1.from = mario;
	m1.to = giuseppe;
	m1.content = "Ciao Giuseppe";
	await m1.save();

	m2 = new Message();
	m2.from = giuseppe;
	m2.to = mario;
	m2.content = "Ciao Mario";
	await m2.save();

	m3 = new Message();
	m3.from = mario;
	m3.to = anna;
	m3.content = "Ciao Anna";
	await m3.save();

	m4 = new Message();
	m4.from = giuseppe;
	m4.to = anna;
	m4.content = "Ciao Anna";
	await m4.save();

	expect(await Message.count()).toBe(4);
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

	// expect to be giuseppe and anna, but order is not guaranteed
	let ids = user.following.map(u => u.id);
	expect(ids).toContain(giuseppe.id);
	expect(ids).toContain(anna.id);
});

it("load user with their followers", async () => {

	let user = await User.find({ where: { following: { id: mario.id } }, relations: { following: true } });

	expect(user.length).toBe(2);

	// expect to be giuseppe and anna, but order is not guaranteed
	let ids = user.map(u => u.id);
	expect(ids).toContain(giuseppe.id);
	expect(ids).toContain(anna.id);
});


