import { Router } from 'express';
import { DUMMY_USER } from './data/dummy';

const router = Router();



// User API
router.get('/user', (req, res) => {
   res.json(DUMMY_USER);
});



export default router;