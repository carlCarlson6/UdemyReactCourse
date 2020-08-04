const express = require('express');
const connectToDB = require('./db/config/Database');

const app = express();

connectToDB();

app.use(express.json({extended:true}));

const PORT = process.env.PORT || 4000;

app.use('/api/users', require('./api/routes/users'));
app.use('/api/auth', require('./api/routes/auth'));

app.listen(PORT, () => console.log('the server is runing'))