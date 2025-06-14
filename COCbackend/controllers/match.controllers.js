// controllers/match.controller.js
import Match from '../models/match.model.js';
import User from '../models/user.model.js';
import Question from '../models/question.model.js';
import { generateCode } from '../utils/generateCode.js';

// POST /api/match/create
/**
 * This endpoint creates a new match.
 * It requires the user to be authenticated and provides match details like title, difficulty, topic, etc.
 * If the match is public, it will not have a unique code; otherwise, a unique code is generated.
 */
const createMatch = async (req, res) => {
  const { userId } = req.auth;
  const {
    title,
    isPublic,
    difficulty,
    topic,
    timeLimit,
    maxPlayers
  } = req.body;

  try {
    const user = await User.findOne({ clerkId: userId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Find a random question that matches topic and difficulty
    const questions = await Question.aggregate([
      {
        $match: {
          difficulty,
          topics: topic // topic is a string, topics is an array
        }
      },
      { $sample: { size: 1 } }
    ]);

    if (!questions.length) {
      return res.status(404).json({ message: 'No matching questions found' });
    }

    const match = await Match.create({
      title,
      isPublic,
      uniqueCode: isPublic ? null : generateCode(),
      difficulty,
      topic,
      timeLimit,
      maxPlayers,
      question: questions[0]._id, //Assigning ques just after creating the match
      players: [
        {
          user: user._id
        }
      ]
    });

    res.status(201).json({ success: true, match });
  } catch (err) {
    console.error('Create Match Error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// POST /api/match/join
/**
 * This endpoint allows a user to join an existing match.
 * The user can either provide a matchId or a uniqueCode to join the match.
 * It checks if the match is joinable and if the user is not already in the match.
 */
const joinMatch = async (req, res) => {
  const { userId } = req.auth;
  const { matchId, uniqueCode } = req.body;

  try {
    const user = await User.findOne({ clerkId: userId });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const match = matchId
      ? await Match.findById(matchId)
      : await Match.findOne({ uniqueCode });

    if (!match) return res.status(404).json({ message: 'Match not found' });

    if (match.status !== 'waiting')
      return res.status(400).json({ message: 'Match is not joinable' });

    if (match.players.some(p => p.user.toString() === user._id.toString()))
      return res.status(400).json({ message: 'Already joined' });

    if (match.players.length >= match.maxPlayers)
      return res.status(400).json({ message: 'Match is full' });

    match.players.push({ user: user._id });
    
    if (match.players.length === match.maxPlayers) {
      match.status = 'ongoing'; // or keep it 'waiting' and trigger separately
    }

    await match.save();
    res.status(200).json({ success: true, match });
  } catch (err) {
    console.error('Join Match Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// GET /api/match/public
/**
 * This endpoint retrieves all public matches that are currently waiting for players.
 * It filters matches to ensure that the number of players is less than the maximum allowed.
 * It also populates the usernames of the players who have joined the match.
 */
const getPublicMatches = async (req, res) => {
  try {
    const publicMatches = await Match.find({
      isPublic: true,
      status: 'waiting',
      $expr: { $lt: [{ $size: '$players' }, '$maxPlayers'] } //Only get matches where the current number of players is less than the allowed maximum
    })
      .populate('players.user', 'username') // Optional: show usernames of joined players
      .sort({ createdAt: -1 }); // sort by most recent matches

    res.status(200).json({ success: true, matches: publicMatches });
  } catch (err) {
    console.error('Get Public Matches Error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// GET /api/match/:matchId
const getMatchById = async (req, res) => {
  const { matchId } = req.params;

  try {
    const match = await Match.findById(matchId)
      .populate('players.user', 'username')
      .populate('question');

    if (!match) {
      return res.status(404).json({ success: false, message: 'Match not found' });
    }

    res.status(200).json({ success: true, match });
  } catch (err) {
    console.error('Get Match Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};



export { createMatch, joinMatch, getPublicMatches, getMatchById };

