import mongoose from 'mongoose';

const testCaseSchema = new mongoose.Schema({
  input: String,
  expectedOutput: String,
  isEdgeCase: { type: Boolean, default: false }
});

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  topics: [String], // e.g., ["DP", "Array"]
  testCases: [testCaseSchema],
  constraints: { type: String }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default mongoose.model('Question', questionSchema);
