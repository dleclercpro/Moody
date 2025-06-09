import { NextFunction, Request, Response } from 'express';
import redis from '../redis';
import { v4 as createToken } from 'uuid';
import QRCode from 'qrcode';
import logger from '../utils/logger';
import { User } from '../types/common';
import { CLIENT_ORIGIN } from '../config';

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
        let token = '';
        let exists = false;
        
        while (token == '' || exists) {
            token = createToken();

            // Check if user already exists
            exists = Boolean(await redis.get(token));
        }

        // Store user in DB
        await redis.set(token, JSON.stringify(user));

        // Create QR code for user to log into the app
        const qr = await QRCode.toDataURL(`${CLIENT_ORIGIN}/auth/qr?token=${token}`);

        res.json({ token, user, qr });
    } catch (err: any) {
        logger.error(err.message);

        res.sendStatus(500);
    }
}

export default CreateUserController;