const express = require('express');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON bodies

// Use the auth routes
app.use('/api/auth', authRoutes);

module.exports = app; 