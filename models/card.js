const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: String,
    mana_cost: String,
    cmc: Number,
    type_line: String,
    oracle_text: String,
    colors: [String]
});

module.exports = mongoose.model('Card', cardSchema)