const mongoose = require('mongoose');

const userScema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model('pscuser', userScema);
module.exports = User;
