import { Router } from 'express';
import SetUserEmotionController from './controllers/SetUserEmotionController';
import GetUserDetailsController from './controllers/GetUserDetailsController';

const router = Router();



// User API
router.get('/user', GetUserDetailsController);
router.post('/user', SetUserEmotionController);



export default router;