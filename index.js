const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./database/connect');
mongoose.set('strictQuery', true);
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
const crons = require('./crons/first-cron');
const passport = require('./passport-strategies/bearer')

const post = require('./routes/api');
const todo = require('./routes/apiToDo');
const user = require('./routes/apiUser');
const email = require('./routes/apiEmail');
const upload = require('./routes/apiUpload');
const authentification = require('./routes/apiAuthentification');

app.use('/api', post);
app.use('/api', todo);
app.use('/api', user);
app.use('/api', email);
app.use('/api', upload);
app.use('/api', authentification);


app.listen(3000, () => console.log('listening on port 3000!'));

