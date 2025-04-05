const express = require('express');
const authRoutes = require('./routes/authRoutes');
const voiceRoutes = require('./routes/voiceRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON bodies

// Use the auth routes
app.use('/api/auth', authRoutes);

// Use the voice routes
app.use('/api/voice', voiceRoutes);

module.exports = app; 