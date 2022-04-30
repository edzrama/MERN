require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books')
const mongoose = require('mongoose');
// app.use('/random',(req, res, next) => {
//   console.log('This is a middleware');
//   next();
// })

app.use(cors());
app.use(bodyParser.json());
app.use('/books', booksRoute);
mongoose.connect(`mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}`, () => {
  console.log('Connected to DB');
}).catch( e => console.log(e));




app.listen(4000);
