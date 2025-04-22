const express = require('express');
const path = require('path');

const app = express();

// Serve the frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// API route to fetch data
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is data from the backend!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
