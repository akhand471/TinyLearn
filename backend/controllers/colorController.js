const Color = require('../models/Color');
exports.getColors = async (req, res) => {
  try {
    const data = await Color.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching colors', error: err.message });
  }
};
