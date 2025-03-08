import { User } from "~/entities/User"

export default defineEventHandler(async (event) => {

	let users = await User.find();

	return {
		status: 200,
		body: {
			users
		}
	}
})
