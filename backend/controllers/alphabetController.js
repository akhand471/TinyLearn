const Alphabet = require('../models/alphbet');
exports.getAlphabets = async (req, res) => {
  try {
    const data = await Alphabet.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching alphabets', error: err.message });
  }
};
