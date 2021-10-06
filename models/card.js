import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    name: String,
    mana_cost: String,
    cmc: Number,
    type_line: String,
    oracle_text: String,
    colors: [String]
});

const cardModel = mongoose.model('Card', cardSchema);

export {cardModel}