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

router.get('/point/:pointnum', function (req, res) {
  res.render('point', { 'config': config, 'pointnum': parseInt(req.params.pointnum) })
})

router.get('/tcop-answers', function (req, res) {
  res.render('tcop-answers', { 'config': config })
})

router.get('/settings', function (req, res) {
  res.render('settings', { 'config': config })
})



module.exports = router
