// app.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
const cors = require('cors')
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
    origin : true,
    credentials : true,
}))
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
