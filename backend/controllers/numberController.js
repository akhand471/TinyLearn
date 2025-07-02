const Number = require('../models/Number');
exports.getNumbers = async (req, res) => {
  try {
    const data = await Number.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching numbers', error: err.message });
  }
};
// This controller fetches the numbers from the database and returns them as JSON.