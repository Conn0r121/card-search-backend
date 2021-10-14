import mongoose from 'mongoose';
import cardModel from './models/card.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
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