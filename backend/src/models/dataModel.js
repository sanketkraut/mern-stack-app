const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  input: String,
  step1: String,
  step2: String,
  step3: String,
  step4: String,
  finalOutput: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', DataSchema);