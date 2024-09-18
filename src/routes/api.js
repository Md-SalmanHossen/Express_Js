
import express from 'express';
import * as welcomeController  from '../controllers/welcomeController.js';

const router = express.Router();

router.get('/',welcomeController.welcome)
router.get('/welcome1',welcomeController.welcome1)
router.get('/welcome2',welcomeController.welcome2)
router.get('/welcome3',welcomeController.welcome3)

export default router;