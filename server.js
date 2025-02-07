const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDatabase = require('./database'); // Database connection logic
const routes = require('./routes'); // Import your CRUD routes

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDatabase();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the MongoDB connection server!');
});

// Database status route
app.get('/status', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'MongoDB connected successfully!' : 'MongoDB connection failed!';
    res.status(mongoose.connection.readyState === 1 ? 200 : 500).send(dbStatus);
});

// CRUD API routes
app.use('/api', routes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});