const mongoose = require('mongoose');
const AlphabetSchema = new mongoose.Schema({
  letter: String,
  image: String,
  audio: String,
});
module.exports = mongoose.model('Alphabet', AlphabetSchema);