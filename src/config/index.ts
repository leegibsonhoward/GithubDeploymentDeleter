import dotenv from 'dotenv';

dotenv.config();

export const config = {
    server: {
        env: process.env.NODE_ENV,
        port: process.env.PORT,
    },
    db: {
        databaseURI: process.env.DATABASE_URI,
    },
    api: {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    },
    session: {
        sessionSecret: process.env.SESSION_SECRET,
    },
};
