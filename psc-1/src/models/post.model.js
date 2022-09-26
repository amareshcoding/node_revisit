const mongoose = require('mongoose');

const postScema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    media: { type: String, required: false },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'pscuser' },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model('pscpost', postScema);
module.exports = Post;
