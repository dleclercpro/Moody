import { Router } from 'express';
import SetUserEmotionController from './controllers/SetUserEmotionController';
import GetUserDetailsController from './controllers/GetUserDetailsController';
import CreateUserController from './controllers/CreateUserController';

const router = Router();



// User API
router.get('/user', GetUserDetailsController);
router.post('/user', CreateUserController);
router.post('/user/emotion', SetUserEmotionController);



export default router;