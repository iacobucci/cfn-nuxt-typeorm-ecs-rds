import { User } from "~/entities/User";
import type { UsersByLastName } from "~/types/api"

export default defineEventHandler(async event => {
	//read body of post request

	const body = await readBody<UsersByLastName>(event);

	const lastName = body.lastName;

	let users = await User.find({ where: { lastName } });

	return {
		status: 200,
		body: {
			users
		}
	}
})
