import { Router } from 'express';
import SetUserEmotionController from './controllers/SetUserEmotionController';
import GetUserDetailsController from './controllers/GetUserDetailsController';
import CreateUserController from './controllers/CreateUserController';

const router = Router();



// Dummy API
router.get('/test', (req, res, next) => {
  res.sendStatus(200);
});



// User API
router.get('/user', GetUserDetailsController);
router.post('/user', CreateUserController);
router.post('/user/emotion', SetUserEmotionController);



export default router;