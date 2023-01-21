const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const api = require('./routes/api');


app.use('/api', api);

app.listen(3000, () => console.log('listening on port 3000!'));
