export default defineEventHandler((event) => {
	let env = process.env.NODE_ENV
	let url = process.env.DB_HOSTNAME

	return {
		env, url
	}
})
