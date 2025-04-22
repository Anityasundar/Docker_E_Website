const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Message = require('./models/Message');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API route
app.post('/api/save', async (req, res) => {
  const { name } = req.body;
  await Message.create({ name });
  res.json({ message: `Saved: ${name}` });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
