import { Router } from 'express';

const router = Router();



const DUMMY_USER = {
    name: 'DummyUser',
};



// User
router.get('/user', (req, res) => {
   res.json(DUMMY_USER);
});



export default router;