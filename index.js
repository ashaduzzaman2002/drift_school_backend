const express = require('express');
require('dotenv').config();
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

const userRouter = require('./routes/user');
const leadRouter = require('./routes/leads');
const socialRouter = require('./routes/social');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api/user', userRouter);
app.use('/api/lead', leadRouter);
app.use('/api/social', socialRouter);


// require db connection
require('./config/db.con');

// Running on port
app.listen(port, (req, res) =>
  console.log(`Server is runnig on http://localhost:${port}`)
);
