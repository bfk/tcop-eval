var express = require('express')
var router = express.Router()
var config = require('./tcop.json')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/start-page', function (req, res) {
  res.render('start-page')
})

router.get('/1-define-user-needs', function (req, res) {
  res.render('1-define-user-needs', { 'config': config, 'pointnum': 1 })
})

module.exports = router
