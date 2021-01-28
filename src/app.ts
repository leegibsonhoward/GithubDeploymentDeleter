import express from 'express';
import expressSession from 'express-session';
import path from 'path';
import layouts from 'express-ejs-layouts';
import methodOverride from 'method-override';
import { config } from './config';
import { router } from './routes/router';

import { mongooseConnectDb } from './db/connection/connect.db';

//// (TODO): move to its own module and import as middleware
import { default as connectMongoDBSession } from 'connect-mongodb-session';
const MongoDBStore = connectMongoDBSession(expressSession);
const store = new MongoDBStore({
    uri: `${config.db.databaseURI}`,
    collection: 'sessions',
});
store.on('error', function (error) {
    console.log(error);
});
////

export const app = async (): Promise<express.Application> => {
    const app: express.Application = express();
    try {
        await mongooseConnectDb();
        // (TODO): load mongo-connect-session here after connection

        // Setup ejs view templates
        // (TODO): maybe move to seperate function
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');
        app.set('layout', 'layouts/main');
        app.use(layouts);

        // allow support for PUT, DELETE request methods
        app.use(
            methodOverride('_method', {
                methods: ['POST', 'GET'],
            }),
        );

        app.use(express.static(path.join(__dirname, 'static')));

        app.use(
            expressSession({
                secret: `${config.session.sessionSecret}`,
                resave: true,
                saveUninitialized: true,
                cookie: {
                    httpOnly: true,
                    secure: false, // (TODO): change before prod
                },
                store: store,
            }),
        );

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use('/', await router());
    } catch (error) {
        throw new Error(error);
    }
    return app;
};
