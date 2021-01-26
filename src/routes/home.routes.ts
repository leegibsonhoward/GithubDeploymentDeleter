import { Router } from 'express';
import { homeController } from '../controllers/home.controller';

export const homeRoutes = async (): Promise<Router> => {
    const router: Router = Router();

    router.get('/', homeController.showMessage);

    return router;
};
