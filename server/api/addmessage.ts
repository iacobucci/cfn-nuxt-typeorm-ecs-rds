import { User } from "~/entities/User"
import { Message } from "~/entities/Message"

export default defineEventHandler(async event => {
	// ottieni i parametri from, to e message della richiesta
	const query = getQuery(event)
	const from = query.fromId;
	const to = query.toId;
	const message = query.message;

	if (from == null || to == null || message == null) {
		return {
			status: 400,
			body: {
				error: 'Missing required fields'
			}
		}
	}

	else {
		// crea un nuovo messaggio
		const newMessage = new Message();
		newMessage.from = from as User;
		newMessage.to = to as User;
		newMessage.message = message as string;

		await newMessage.save();

		return {
			status: 200,
			body: {
				newMessage
			}
		}
	}
})
