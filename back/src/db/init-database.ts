import { MongoDatabase } from "."

export type InitDatabaseOptions = {
    main?: boolean
    tech?: boolean
    outputDemping?: boolean
}

export const initDatabase = async (options: InitDatabaseOptions): Promise<void> => {
    if (options?.main) {
        await MongoDatabase.initMainDataBaseConnection()
    }
}


