const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Message', messageSchema);
