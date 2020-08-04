const express = require('express');
const connectToDB = require('./config/Database');
const userRoutes = require('./routes/users');

const app = express();

connectToDB();

app.use(express.json({extended:true}));

const PORT = process.env.PORT || 4000;

app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log('the server is runing'))