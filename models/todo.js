const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('ToDo', todoSchema);