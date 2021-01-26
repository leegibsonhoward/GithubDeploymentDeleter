import { Request, Response } from 'express';
import { homeService } from '../services/home.service';

const showMessage = async (_req: Request, res: Response): Promise<void> => {
    const newMsg = 'Enter Your repo info below';
    try {
        const msg = await homeService.createMessage(newMsg);
        res.locals.msg = msg;
        res.render('pages/index');
    } catch (e) {
        res.send(e.message);
    }
};

const showDeployments = async (req: Request, res: Response): Promise<void> => {
    const baseURL = 'https://api.github.com/repos';
    const { owner, repo } = req.query;
    try {
        const deployments = await homeService.getDeployments(
            `${baseURL}/${owner}/${repo}/deployments`,
        );
        console.log(deployments);
        res.locals.deployments = deployments;
        res.render('pages/deployments');
    } catch (e) {
        res.send(e.message);
    }
};

export const homeController = {
    showMessage,
    showDeployments,
};
