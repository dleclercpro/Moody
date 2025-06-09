import { NextFunction, Request, Response } from 'express';
import redis from '../redis';
import { v4 as createToken } from 'uuid';
import logger from '../utils/logger';
import { User } from '../types/common';

const CreateUserController = async (req: Request, res: Response, next?: NextFunction) => {
    try {
        const query = req.query;

        // Parse query parameters
        const name = query.name as string;

        if (!name) {
            throw new Error('NO_USER_NAME');
        }

        logger.info(`Creating new user named '${name}'...`);

        const user: User = {
            name,
            emotion: null,
        };

        // Find a unique ID for new user
        let id = '';
        let exists = false;
        
        while (id == '' || exists) {
            id = createToken();

            // Check if user already exists
            exists = Boolean(await redis.get(id));
        }

        // Store user in DB
        await redis.set(id, JSON.stringify(user));

        res.json({ id, user });
    } catch (err: any) {
        logger.error(err.message);

        res.sendStatus(500);
    }
}

export default CreateUserController;