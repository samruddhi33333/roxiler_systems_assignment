const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number
});

module.exports = mongoose.model('Store', storeSchema);
