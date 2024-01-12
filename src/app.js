const express = require('express');
const app = express();
const taskRoutes = require('../routes/taskRoutes');
const userRoutes = require('../routes/userRoutes');

app.use(express.json());

app.use('/api/v1', userRoutes);
app.use('/api/v1/', taskRoutes);

module.exports = app;
