const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend's origin
}));

app.use(express.json());

// Routes
app.use('/api/hashtags', require('./routes/hashtags'));

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Serve static files in production
const frontendPath = path.join(__dirname, '../frontend/dist'); // Adjust the path
app.use(express.static(frontendPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});



// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
