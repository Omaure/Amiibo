const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let gameModel = require("./models/GameModel");
const GameRoutes = require('./routes/GameRoutes');
const got = require('got');
const PORT = 4000;
let app = express();
const bodyparser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/games", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongo Connection Has Been Established")).catch(err => console.log(err));

// Data loaded into MongoDB
// (async () => {
//     try {
//         const response = await got('https://www.amiiboapi.com/api/amiibo/');
//         console.log(response.body);
//         const amiibos = JSON.parse(response.body).amiibo;
//         allGames = await gameModel.insertMany(amiibos, (err, amb) => {
//             console.log(err);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// })();

app.use(cors());
app.use(bodyparser.json());
app.use((req, res, next) => {
    console.log(`${new Date} ----- ${req.method} request ----- ${req.url}`);
    next();
});

app.use('/games', GameRoutes);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Express Started on port ${PORT}`);
    }
});
