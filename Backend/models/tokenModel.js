const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  accessToken: { type: String, required: true },
  expiresIn: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1h' }, // Expire token after 1 hour
});

module.exports = mongoose.model('Token', tokenSchema);
