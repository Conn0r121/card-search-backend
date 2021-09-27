const oracle_cards = require('../oracle-cards-20210925090339.json');
const mongoose = require('mongoose');
const cardModel = require('./models/card.js');
require('dotenv').config();

async function main() {
    const databasePath = 'mongodb+srv://connor:gnPY8DDKcPxgIRWn@cluster0.fabc3.mongodb.net/cards';
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

// main();

console.log(process.env.DATABASE_USER);