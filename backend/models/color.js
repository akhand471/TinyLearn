const mongoose = require('mongoose'); 
const ColorSchema = new mongoose.Schema({
  name: String,
  hex: String,
  image: String,
});
module.exports = mongoose.model('Color', ColorSchema);