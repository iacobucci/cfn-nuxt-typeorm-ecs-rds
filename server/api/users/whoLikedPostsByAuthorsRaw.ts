import type { UsersWhoLikedPostsByAuthors } from "~/types/api"

export default defineEventHandler(async event => {

	const body = await readBody<UsersWhoLikedPostsByAuthors>(event);

	const usernames = body.usernames;

	const placeholders = usernames.map((_, index) => `$${index + 1}`).join(", ");

	const users = await AppDataSource.query(
		`SELECT DISTINCT u.*
   FROM "user" u
   INNER JOIN post_liked_by_user pl ON u.id = pl."userId"
   INNER JOIN post p ON pl."postId" = p.id
   INNER JOIN "user" author ON p."authorId" = author.id
   WHERE author.username IN (${placeholders})`,
		[...usernames]);

	return {
		status: 200,
		body: {
			users
		}
	}

})
