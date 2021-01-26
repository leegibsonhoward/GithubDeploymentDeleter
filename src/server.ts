import * as http from 'http';
import { app } from './app';

export const startServer = async (): Promise<http.Server> => {
    const server: http.Server = http.createServer(await app());
    const port: number = 8080;

    server.listen(port, () => {
        console.log(`server running on port ${port}`);
    });

    return server;
};

startServer();
