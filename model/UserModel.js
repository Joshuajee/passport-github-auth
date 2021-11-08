const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    username: { type: String },
    githubId: { type: String, unique: true },
    location: { type: String },
    phone: { type: String },
    email: { type: String, lowercase: true },
    profilePhoto: { type: String, default: '' }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
