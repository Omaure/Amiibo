let express = require('express');
let router = express.Router();
let gameModel = require("../models/GameModel");

module.exports = router;


router.get('/search/:name', async (req, res) => {
    console.log(req.params.name);
    const searchName = req.params.name;
    try {
        const result = await gameModel.find({name: { $regex: searchName, $options: 'i'}}).exec();
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.get('/searchedgames/:name', async (req, res) => {

    const searchName = req.params.name;
    try {
        const result = await gameModel.find({name: { $regex: searchName, $options: 'i'}}).exec();
        console.log(result);
        res.json(result.length);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.get("/maxpages", async (req, res) => {
    const GamesNo = await gameModel.estimatedDocumentCount().exec();
    const maxPage = GamesNo / 7;
    res.json(maxPage);
});

router.get("/numberofgames", async (req, res) => {
    const GamesNo = await gameModel.estimatedDocumentCount().exec();
    res.json(GamesNo);
});

router.get("/:page", async (req, res, next) => {
    const resultsPerPage = 7;
    const GamesNo = await gameModel.estimatedDocumentCount().exec();
    const page = req.params.page >= 1 ? req.params.page : 1;
    const maxPage = GamesNo / 7;
    if (page < maxPage) {
        gameModel.find()
            .sort({name: "asc"})
            .limit(resultsPerPage)
            .skip(resultsPerPage * page)
            .then((results) => {
                return res.status(200).send(results);
            })
            .catch((err) => {
                return res.status(500).send(err);
            });
    } else {
        res.json("max page");
    }
});

