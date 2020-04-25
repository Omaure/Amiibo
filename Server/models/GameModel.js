const mongoose = require('mongoose');

let gameSchema = new mongoose.Schema({
    amiiboSeries: {type: String},
    character: {type: String},
    gameSeries: {type: String},
    head: {type: String},
    image: {type: String},
    name: {type: String},
    release: {type: Object},
    tail: {type: String},
    type: {type: String}
});

let gameModel = mongoose.model('game', gameSchema,'game');

module.exports = gameModel;
