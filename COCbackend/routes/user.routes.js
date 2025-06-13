import express from 'express';
import { syncUser, getUser } from '../controllers/user.controllers';
const router = express.Router();
import requireAuth from '../middlewares/requireAuth.js';


router.post('/sync', requireAuth, syncUser);
router.get('/:clerkId', requireAuth, getUser);

export default router;