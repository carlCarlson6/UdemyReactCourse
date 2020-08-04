const express = require('express');
const connectToDB = require('./config/Database');

const app = express();

connectToDB();

const PORT = process.env.PORT || 4000;

//app.get('/', (req, res) => res.send('hello'))

app.listen(PORT, () => console.log('the server is runing'))