var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/start-page', function (req, res) {
  res.render('start-page')
})

module.exports = router
