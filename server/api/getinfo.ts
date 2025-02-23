export default defineEventHandler((event) => {
	let env = process.env.NODE_ENV
	let hostname = process.env.DB_HOSTNAME
	let port = process.env.DB_PORT
	let name = process.env.DB_NAME
	let username = process.env.DB_USERNAME
	let password = process.env.DB_PASSWORD


	return {
		env, hostname, port, name, username, password
	}
})
