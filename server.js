const dotenv = require('dotenv');

dotenv.config();
require('./config/database');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes

app.listen(PORT, () => {
  console.log('The express app is ready!');
});
