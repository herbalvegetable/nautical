const fs = require('fs');
const bodyParser = require('body-parser');

const { Article } = require('../models/Article');

module.exports = app => { //operations
    app.get('/article', async (req, res) => {
        try {
            const articles = await Article.find({});
            res.send(articles);
            console.log('GET: retrieving articles');
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });

    app.post('/article', bodyParser.json(), async (req, res) => {
        try {

            console.log(req.body);
            const { title, text, imgData: imgBase64 } = req.body;

            const article = new Article({ title, text, imgBase64 });

            const result = await article.save();
            res.sendStatus(200);
            console.log('POST: new article created');
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });

    app.put('/article', async (req, res) => { //update

    });

    app.delete('/article', async (req, res) => {

    });
}