import { User } from "~/entities/User";
import { Post } from "~/entities/Post";
import { Repository } from "typeorm";


const USERS = 10000;
const POSTS = 100000;

export default defineEventHandler(async (event) => {

	await AppDataSource.query(`INSERT INTO public."user" (id, username) SELECT i, 'user-' || i FROM generate_series(0, 9999) AS i;`);

	await AppDataSource.query(`INSERT INTO public.post (id, content, "authorId") SELECT i, 'post' || i, floor(random() * 10000) FROM generate_series(0, 99999) AS i; `)

	await AppDataSource.query(`INSERT INTO public.post_liked_by_user ("postId", "userId") SELECT floor(random() * 100000), floor(random() * 10000) FROM generate_series(1, 1000000) ON CONFLICT DO NOTHING;`);

	return {
		status: 200
	}

});