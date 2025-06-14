// routes/match.routes.js
import express from 'express';
import { createMatch, joinMatch, getPublicMatches } from '../controllers/match.controllers.js';
import requireAuth from '../middlewares/requireAuth.js';

const router = express.Router();

// Protected routes
router.post('/create', requireAuth, createMatch);
router.post('/join/:matchId', requireAuth, joinMatch);
router.get('/public', requireAuth, getPublicMatches);

export default router;
