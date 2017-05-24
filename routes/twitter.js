var express = require('express')
var router = express.Router()

var controllerSearch = require('../controllers/twatt-search')

router.post('/twitter', controllerSearch.search)

module.exports = router