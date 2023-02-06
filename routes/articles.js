//Requires necessary NPM packages
const express = require('express');

//Require MOngoose Model for Article
const Article = require('./../models/article');

///INstantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:    Index
 * Method:    GET
 * URI:    /api/articles
 * Description:   Get ALL Articles
 */

router.get('/api/articles', (req, res) => {
    Article.find()
    //Reurn all articles as an array
    .then((articles) => {
        res.status(200).json({ articles: articles}); 
    })
    //Catch any errors that might occur
    .catch((error) => {
        res.status(500).json({ error: error});
    });
});


/**
 * Action:   Show
 * MEthod:   Get
 * URI:      api/articles/5d664b8b68b4f5092aba18e9
 * Description:  Get ANy Article by Article ID
 */


/**
 * Action: DESTROY
 * Method: DELETE
 * URI: api/articles/5d664b8b68b4f5092aba18e9
 * Description: Delete An article by Article ID
 */


/**
 * Action:     Update
 * MEthod:    Put/Patch]
 * URI:    api/articles/5d664b8b68b4f5092aba18e9
 * Description:  Update an article bt aritcle ID
 */

/**
 * Action: Create
 * Method: Post
 * URI: /api/articles
 * Description: Create a new article
 */

//Export the ROuter so we can use it in the server files
module.exports = router;
