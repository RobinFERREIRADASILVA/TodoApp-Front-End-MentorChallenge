const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  label: { type: String, required: true },
  done: { type: Boolean, required: true },
  userId: { type: Number, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
