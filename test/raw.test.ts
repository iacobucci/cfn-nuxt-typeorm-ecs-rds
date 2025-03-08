import { describe, it, beforeAll, afterAll, beforeEach, afterEach, expect } from "vitest";
import { setupTest } from "~/test/setup";

import { User } from "~/entities/User";
import { Message } from "~/entities/Message";
import { Post } from "~/entities/Post";

import { AppDataSource, initialize } from "~/server/utils/datasource";
import { In } from "typeorm";

beforeAll(setupTest);

it("create sample users", async () => {
	await AppDataSource.query(`INSERT INTO public."user" (username) VALUES
	 ('alice'),
	 ('bob'),
	 ('mario'),
	 ('giuseppe'),
	 ('anna'),
	 ('maria'),
	 ('giovanna'),
	 ('marta'),
	 ('nicola'),
	 ('enrico'),
	 ('andrea'),
	 ('angelo'),
	 ('mattia');
	 `);

	expect((await AppDataSource.getRepository(User).query(`SELECT COUNT(*) FROM public."user"`))[0]["count"]).toBe("13");
});

it("create sample posts", async () => {

	const alice = await User.findOneOrFail({ where: { username: "alice" } });
	const bob = await User.findOneOrFail({ where: { username: "bob" } });

	await AppDataSource.query(`INSERT INTO public.post ("id","content", "authorId") VALUES
    (1,'test', $1),
    (2,'test', $2),
    (3,'test', $1),
    (4,'test', $2),
    (5,'test', $1),
    (6,'test', $2),
    (7,'test', $1);`,
		[alice.id, bob.id]
	);

	expect((await AppDataSource.getRepository(Post).query(`SELECT COUNT(*) FROM public.post`))[0]["count"]).toBe("7");

})

it("create sample liked posts", async () => {

	const alice = await User.findOneOrFail({ where: { username: "alice" } });
	const bob = await User.findOneOrFail({ where: { username: "bob" } });
	const mario = await User.findOneOrFail({ where: { username: "mario" } });
	const giuseppe = await User.findOneOrFail({ where: { username: "giuseppe" } });
	const anna = await User.findOneOrFail({ where: { username: "anna" } });
	const maria = await User.findOneOrFail({ where: { username: "maria" } });
	const giovanna = await User.findOneOrFail({ where: { username: "giovanna" } });

	await AppDataSource.query(`INSERT INTO public.post_liked_by_user ("postId","userId") VALUES
	 (1,$2),
	 (1,$3),
	 (1,$4),
	 (2,$1),
	 (2,$3),
	 (2,$4),
	 (3,$5),
	 (3,$6),
	 (4,$5),
	 (4,$7);`,
		[alice.id, bob.id, mario.id, giuseppe.id, anna.id, maria.id, giovanna.id]

	);

	expect((await AppDataSource.getRepository(User).query(`SELECT COUNT(*) FROM public.post_liked_by_user`))[0]["count"]).toBe("10");

});

it("query users who liked posts by authors", async () => {
	const authors = ["alice", "bob"];

	const placeholders = authors.map((_, index) => `$${index + 1}`).join(", ");

	const users = await AppDataSource.query(
		`SELECT DISTINCT u.*
   FROM "user" u
   INNER JOIN post_liked_by_user pl ON u.id = pl."userId"
   INNER JOIN post p ON pl."postId" = p.id
   INNER JOIN "user" author ON p."authorId" = author.id
   WHERE author.username IN (${placeholders})`,
		authors
	);

	expect(users.length).toBe(7);

});
