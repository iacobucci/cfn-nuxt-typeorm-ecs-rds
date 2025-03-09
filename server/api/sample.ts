import { User } from "~/entities/User";

export default defineEventHandler(async (event) => {


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


	return {
		status: 200,
		body: "Sample data created"
	}

});