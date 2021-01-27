import * as http from 'http';
import { app } from './app';
import { config } from './config';

export const startServer = async (): Promise<http.Server> => {
    const server: http.Server = http.createServer(await app());

    server.listen(config.server.port, () => {
        console.log(`server running on port ${config.server.port}`);
    });

    return server;
};

startServer();
