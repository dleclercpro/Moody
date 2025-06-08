import { Router } from 'express';
import { DUMMY_USER } from './data/dummy';
import logger from './utils/logger';

const router = Router();



// User API
// Get user details
router.get('/user', (req, res) => {
    res.json(DUMMY_USER);
});

// Set emotion
router.post('/user', (req, res) => {
    try {
        const { emotion } = req.body;

        logger.info(`User's emotion: ${emotion}`);

        res.sendStatus(200);
    } catch (err: any) {
        logger.error(`Could not determine user's emotion.`);

        res.sendStatus(500);
    }
});



export default router;