import { User } from '~/entities/User'

export default defineEventHandler(async (event) => {
	// ottieni i parametri firstName e lastName della richiesta
	const query = getQuery(event)
	const firstName = query.firstName;
	const lastName = query.lastName;

	if (firstName == null || lastName == null) {
		return {
			status: 400,
			body: {
				error: 'Missing required fields'
			}
		}
	}

	else {
		// crea un nuovo utente
		const user = new User();
		// user.firstName = firstName as string;
		// user.lastName = lastName as string;

		await user.save();

		return {
			status: 200,
			body: {
				user
			}
		}
	}

})
