import { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';
import redis from '../redis';
import { DUMMY_USER } from '../data/dummy';

const SetUserEmotionController = async (req: Request, res: Response, next?: NextFunction) => {
    try {
        const { emotion } = req.body;

        if (!emotion) throw new Error('NO_USER_EMOTION');

        // Store emotion in DB
        await redis.set(DUMMY_USER.name, emotion);

        logger.info(`User's emotion: ${emotion}`);

        res.sendStatus(200);
    } catch (err: any) {
        logger.error(err.message);

        res.sendStatus(500);
    }
}

export default SetUserEmotionController;