var modelsSearch = require('../models/twatt-search')
require('dotenv').config()

module.exports = {
	search : (req, res) => {
	  modelsSearch.getOauth(oauth => {
	    oauth.get(
	      'https://api.twitter.com/1.1/search/tweets.json?q=%40'+req.body.search,
	      process.env.ACCESS_TOKEN, //test user token
	      process.env.TOKEN_SECRET, //test user secret
	      function (e, data){
	        if (e) console.error(e);
	        res.send(data)
	      });
	  })
	}
}