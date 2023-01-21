const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);