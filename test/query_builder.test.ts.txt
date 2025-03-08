import { describe, it, beforeAll, afterAll, beforeEach, afterEach, expect } from "vitest";
import { setupTest } from "~/test/setup";

import { User } from "~/entities/User";
import { Message } from "~/entities/Message";

import { AppDataSource, initialize } from "~/server/utils/datasource";
import { In } from "typeorm";

beforeAll(setupTest);

// sintassi array destructuring, più concisa
let [mario, giuseppe, anna, maria, antonio]: User[] = []; // assegnamento orphan, inaggirabile

it("create sample users", async () => {
	mario = new User();
	mario.username = "mario";

	giuseppe = new User();
	giuseppe.username = "giuseppe";

	anna = new User();
	anna.username = "anna";

	maria = new User();
	maria.username = "maria";

	antonio = new User();
	antonio.username = "antonio";

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

	await AppDataSource.getRepository(Message).save([m1, m2, m3, m4]);

	expect(await Message.count()).toBe(4);

});

it("query messages from mario", async () => {
	const messages = await Message.createQueryBuilder("message")
		.leftJoinAndSelect("message.from", "from")
		.where("from.id = :marioId", { marioId: mario.id })
		.getMany();

	expect(messages.length).toBe(2);
	expect(messages[0].content).toBe("Ciao Giuseppe");
	expect(messages[1].content).toBe("Ciao Anna");
});

it("query messages to anna from users that anna is following", async () => {
	const messages = await Message.createQueryBuilder("message")
		.leftJoinAndSelect("message.to", "to")
		.leftJoinAndSelect("message.from", "from")
		.where("to.id = :annaId", { annaId: anna.id })
		.andWhere("from.id IN (:...followingIds)", {
			followingIds: anna.following.map(f => f.id),
		})
		.getMany();

	expect(messages.length).toBe(1);
	expect(messages[0].content).toBe("Ciao Anna");
	expect(messages[0].from.id).toBe(mario.id);
});

it("load user with their followed", async () => {
	const user = await User.createQueryBuilder("user")
		.leftJoinAndSelect("user.following", "following")
		.where("user.id = :marioId", { marioId: mario.id })
		.getOne();

	if (!user) {
		throw new Error("User not found");
	}

	expect(user.following.length).toBe(2);

	const ids = user.following.map(u => u.id);
	expect(ids).toContain(giuseppe.id);
	expect(ids).toContain(anna.id);
});

it("load user with their followers", async () => {
	const users = await User.createQueryBuilder("user")
		.leftJoinAndSelect("user.following", "following")
		.where("following.id = :marioId", { marioId: mario.id })
		.getMany();

	expect(users.length).toBe(2);

	const ids = users.map(u => u.id);
	expect(ids).toContain(giuseppe.id);
	expect(ids).toContain(anna.id);
});



