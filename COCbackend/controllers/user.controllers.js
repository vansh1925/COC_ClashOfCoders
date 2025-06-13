import User from '../models/User.js';


// --> /api/user/sync
// This endpoint is used to sync the user data with Clerk.
const syncUser = async (req, res) => {
  const { userId, email } = req.auth;
  const { username } = req.body;

  try {
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({
        clerkId: userId,
        email,
        username, // Clerk does not provide it, so we use the one from the request
      });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error('User sync failed:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// --> /api/user/:clerkId
/**
 * This endpoint retrieves a user by their Clerk ID.
 * It populates the matchHistory field with the related Match documents.
 */
const getUser = async (req, res) => {
  const { clerkId } = req.params;

  try {
    const user = await User.findOne({ clerkId }).populate('matchHistory');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { syncUser, getUser };
// Exporting the functions to be used in routes