import { Request, Response } from 'express';
import { homeService } from '../services/home.service';

const showMessage = async (_req: Request, res: Response): Promise<void> => {
    const newMsg = 'A simple example of using homeService';
    try {
        const msg = await homeService.createMessage(newMsg);
        res.locals.msg = msg;
        res.render('pages/index');
    } catch (e) {
        res.send(e.message);
    }
};

export const homeController = {
    showMessage,
};
