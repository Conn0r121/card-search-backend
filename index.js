const mongoose = require('mongoose');
const cardModel = require('./models/card.js');
require('dotenv').config();

const app = require('express')();
const PORT = 8080;

const databasePath = `${process.env.DATABASE_URI}/cards`;
mongoose.connect(databasePath, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
);

app.get('/card', async (req, res) => {
    const cardName = req.query.name;
    const card = await cardModel.find({ name: cardName});
    res.status(200).send(card);
});