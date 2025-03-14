import type { UsersWhoLikedPostsByAuthors } from "~/types/api"
import { User } from "~/entities/User";
import { In } from "typeorm";

export default defineEventHandler(async event => {

	const body = await readBody<UsersWhoLikedPostsByAuthors>(event);

	const usernames = body.usernames;

	User.useDataSource(await initialize());

	const authors = await User.find({
		where: [{ username: In(usernames) }],
		relations: { posts: { likedBy: true } },
	});

	const usersWhoLikedAuthorsPosts: User[] = authors.flatMap((author) =>
		author.posts.flatMap((post) => post.likedBy)
	);

	const users = usersWhoLikedAuthorsPosts.sort((a, b) => a.id - b.id);

	return {
		status: 200,
		body: {
			users
		}
	}

})
