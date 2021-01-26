import { Router } from 'express';
import { homeController } from '../controllers/home.controller';

export const homeRoutes = async (): Promise<Router> => {
    const router: Router = Router();

    router.get('/', homeController.showMessage);
    router.get('/deployments', homeController.showDeployments);
    return router;
};
