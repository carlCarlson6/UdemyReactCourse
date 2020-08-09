const express = require('express');
const connectToDB = require('./config/Database');
const cors = require('cors');

const app = express();

connectToDB();

app.use(cors());

app.use(express.json({extended:true}));

const port = process.env.PORT || 4000;

app.use('/api/users', require('./api/routes/UsersRoutes'));
app.use('/api/auth', require('./api/routes/AuthRoutes'));
app.use('/api/projects', require('./api/routes/ProjectsRoutes'));
app.use('/api/tasks', require('./api/routes/TaskRoutes'));

app.listen(port, '0.0.0.0', () => console.log('the server is runing'))