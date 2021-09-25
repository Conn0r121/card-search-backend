const mongoose = require('mongoose');
const cardModel = require('./models/card.js');
const cards = require('./dummyData/cards.js');

async function main() {
    const databasePath = 'mongodb+srv://connor:gnPY8DDKcPxgIRWn@cluster0.fabc3.mongodb.net/cards';
    mongoose.connect(databasePath, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', async () => {
        console.log('connected');
    
        cards.forEach(async (cardJson) => {
            const card = new cardModel(cardJson);
            await card.save();
        });
    });
}

main();