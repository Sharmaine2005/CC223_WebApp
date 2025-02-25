const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const PORT = 8000;

app.use(cors()); // Allow frontend to communicate with backend

// Serve static files from frontend
app.use(express.static(path.resolve(__dirname, '../frontend')));

// API Route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the Backend!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
