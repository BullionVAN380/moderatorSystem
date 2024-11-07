const mongoose = require('mongoose');

const ModerationSchema = new mongoose.Schema({
  department: String,
  course: String,
  unit: String,
  trainer:String,
  level: mongoose.Schema.Types.Mixed, // Allows both numbers and strings
  levels: [{ type: mongoose.Schema.Types.Mixed }], 
  year: mongoose.Schema.Types.Mixed, 

  answers: [
    {
      guideline: String,
      answer: String,
      comment: String
    }
  ],
  submissionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Moderation', ModerationSchema);
