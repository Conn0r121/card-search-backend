const oracle_cards = require('../oracle-cards.json');
const mongoose = require('mongoose');
const cardModel = require('./models/card.js');
require('dotenv').config();

async function main() {
    const databasePath = `${process.env.DATABASE_URI}/cards`;
    mongoose.connect(databasePath, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', async () => {
        console.log('connected');
    
        oracle_cards.forEach(async (cardJson) => {
            const card = new cardModel(cardJson);
            await card.save();
        });
        console.log('all cards saved!');
    });
}

main();