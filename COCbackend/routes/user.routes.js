import express from 'express';
import { syncUser, getUser, connectWallet } from '../controllers/user.controllers.js';
const router = express.Router();
import requireAuth from '../middlewares/requireAuth.js';


router.post('/sync', requireAuth, syncUser); //sync user data with Clerk
router.get('/:clerkId', requireAuth, getUser);  //get user details by Clerk ID
router.patch('/connect-wallet',requireAuth, connectWallet) //connect wallet address for already signed/logged-in users

export default router;