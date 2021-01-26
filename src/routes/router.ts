import { Router } from 'express';
import { homeRoutes } from './home.routes';

export const router = async (): Promise<Router> => {
    const router: Router = Router();

    router.use('/', await homeRoutes());
    return router;
};
