const mongoose = require('mongoose');
const NumberSchema = new mongoose.Schema({
  value: Number,
  image: String,
  audio: String,
});
module.exports = mongoose.model('Number', NumberSchema);