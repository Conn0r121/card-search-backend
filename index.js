const mongoose = require('mongoose');
const cardModel = require('./models/card.js');

exports.handler = async (event) => {
    const databasePath = `${process.env.DATABASE_URI}/cards`;
    mongoose.connect(databasePath, {useNewUrlParser: true, useUnifiedTopology: true});

    const cardName = event.queryStringParameters.name;
    const regex = new RegExp(cardName, 'i');
    const card = await cardModel.find({'name' : { '$regex': regex}});
    

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET"
        },
        body: JSON.stringify(card),
    };
    return response;
}