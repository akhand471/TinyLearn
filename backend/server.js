const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const alphabetRoutes = require('./routes/alphabetRoutes');
const numberRoutes = require('./routes/numberRoutes');
const colorRoutes = require('./routes/colorRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/content/alphabets', alphabetRoutes);
app.use('/api/content/numbers', numberRoutes);
app.use('/api/content/colors', colorRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch((err) => console.log(err));
