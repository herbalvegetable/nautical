const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const articleSchema = new Schema({

    title: {type: String, required: true},
    text: {type: String, required: true},
    imgBase64: String,

}, { timestamps: true });

const Article = mongoose.model('article', articleSchema);

module.exports = { Article, articleSchema };