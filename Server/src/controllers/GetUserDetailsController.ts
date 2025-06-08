import { NextFunction, Request, Response } from 'express';
import { DUMMY_USER } from '../data/dummy';

const GetUserDetailsController =(req: Request, res: Response, next?: NextFunction) => {
    try {
        res.json(DUMMY_USER);
    } catch (err: any) {
        res.sendStatus(500);
    }
}

export default GetUserDetailsController;