const mongoose = require('mongoos');

const articleSchema = new mongoose.Schema({
    titile: { type: String, require: true },
    content: String,
    author: { type: String, required: true },
    published: { Boolean, default : true },
    publishedOn: { typ: Date, default: Date.now }
}, {
timestamps: true
});

//compile our Model based on the Schema

const Article = mongoose.model('Article', articleSchema);

//Export our model for use
module.exports = Article;