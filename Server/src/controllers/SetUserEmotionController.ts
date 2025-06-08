import { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';

const SetUserEmotionController =(req: Request, res: Response, next?: NextFunction) => {
    try {
        const { emotion } = req.body;

        logger.info(`User's emotion: ${emotion}`);

        res.sendStatus(200);
    } catch (err: any) {
        logger.error(`Could not determine user's emotion.`);

        res.sendStatus(500);
    }
}

export default SetUserEmotionController;