const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

require('./config/database');
const express = require('express');

// Controllers
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log('The express app is ready!');
});
