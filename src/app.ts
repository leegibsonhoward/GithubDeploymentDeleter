import express from 'express';
import path from 'path';
import { mongooseConnectDb } from './db/connection/connect.db';

import layouts from 'express-ejs-layouts';
import methodOverride from 'method-override';

import { router } from './routes/router';

export const app = async (): Promise<express.Application> => {
    const app: express.Application = express();
    try {
        await mongooseConnectDb();

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

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use('/', await router());
    } catch (error) {
        throw new Error(error);
    }
    return app;
};
