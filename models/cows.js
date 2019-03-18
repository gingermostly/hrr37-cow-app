const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cowSchema = new Schema({
  name: String,
  description: String
});

module.exports = cows = mongoose.model('cows', cowSchema);
