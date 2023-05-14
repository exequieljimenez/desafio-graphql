import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const PERSISTENCE = process.env.PERSISTENCE;

const options = {
    server: {
        port: PORT,
        persistence: PERSISTENCE
    },
    mongo: {
        url: `mongodb://localhost:27017/${DB_NAME}`
    }
}

export {options}