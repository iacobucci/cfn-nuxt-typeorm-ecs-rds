import { AppDataSource } from '~/server/utils/datasource'

export default defineNitroPlugin(async () => {
	// Inizializza il database solo lato server
	console.log('🚀 Inizializzazione Typeorm')
	try {
		if (!AppDataSource.isInitialized) {
			await AppDataSource.initialize()
			console.log('✅ Typeorm inizializzato', { type: AppDataSource.options.type, database: AppDataSource.options.database })
		}
	} catch (error) {
		console.error('❌ Errore inizializzazione Typeorm', error)
		throw error
	}
})
