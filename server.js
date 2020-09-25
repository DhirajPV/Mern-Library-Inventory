const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const path = require('path');

const books = require('./routes/api/books');

const app = express();

app.use(bodyParser.json());

var cors = require('cors')

app.use(cors())

const db = require('./config/db').mongoURI;

mongoose.set('useUnifiedTopology', true);
mongoose.connect(db, {useNewUrlParser: true}).then(() => console.log('MongoDB Connected ..')).catch(err => console.log(err));

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));