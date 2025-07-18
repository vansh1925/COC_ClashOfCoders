import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // From Clerk
  username: { type: String},
  email: { type: String },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  totalWins: { type: Number, default: 0 },
  matchHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
  //web3 fields
  walletAddress: { type: String, default: null }, // user connects wallet in Web3 mode
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default mongoose.model('User', userSchema);
