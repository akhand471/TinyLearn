onst Alphabet = require('./models/Alphabet');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  try {
    await Alphabet.deleteMany();
    const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => ({
      letter,
      image: `/images/${letter}.png`,
      audio: `/audio/${letter}.mp3`,
    }));
    await Alphabet.insertMany(data);
    console.log('Seeded alphabets');
  } catch (err) {
    console.error('Error seeding alphabets:', err);
  } finally {
    process.exit();
  }
});
const mongoose = require('mongoose');