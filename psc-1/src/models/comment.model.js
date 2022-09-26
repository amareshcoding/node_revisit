const mongoose = require('mongoose');

const commentScema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'pscpost' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'pscuser' },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model('psccomment', commentScema);
module.exports = Comment;
