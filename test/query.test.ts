import { describe, it, beforeAll, afterAll, beforeEach, afterEach, expect } from "vitest";
import { setupTest } from "~/test/setup";

import { User } from "~/entities/User";
import { Message } from "~/entities/Message";
import { Post } from "~/entities/Post";

import { AppDataSource, initialize } from "~/server/utils/datasource";
import { In } from "typeorm";

beforeAll(setupTest);

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

it("create sample posts", async () => {
	const post1 = new Post();
	post1.author = mario;
	post1.content = "Ciao Giuseppe";
	await post1.save();

	const post2 = new Message();
	post
});