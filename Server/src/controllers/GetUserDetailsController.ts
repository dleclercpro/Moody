import { NextFunction, Request, Response } from 'express';
import { DUMMY_USER } from '../data/dummy';
import redis from '../redis';
import logger from '../utils/logger';

const GetUserDetailsController = async (req: Request, res: Response, next?: NextFunction) => {
    const user = DUMMY_USER;
    
    try {
        const emotion = await redis.get(user.name);

        logger.info(`User '${user.name}' already has an emotion: ${emotion}`);
        
        res.json(emotion ? { ...user, emotion } : user);
    } catch (err: any) {
        res.sendStatus(500);
    }
}

export default GetUserDetailsController;