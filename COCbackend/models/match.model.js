import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  title: { type: String },
  isPublic: { type: Boolean, default: true },
  uniqueCode: { type: String }, // for private matches
  status: { type: String, enum: ['waiting', 'ongoing', 'completed'], default: 'waiting' },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  dataStructure: { type: String }, // e.g., "Array", "DP", etc.
  timeLimit: { type: Number, required: true }, // in seconds
  maxPlayers: { type: Number, default: 2 },
  players: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      submissionTime: { type: Number }, // in seconds
      score: { type: Number },
      code: { type: String },
      language: { type: String, enum: ['javascript', 'python', 'java', 'c++'] }, // supported languages
      position : { type : Number, enum: [1, 2, 3, 4]  } // position in the match
    }
  ],
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
},{
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default mongoose.model('Match', matchSchema);
