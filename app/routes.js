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

router.get('/confirmation-page', function (req, res) {
  var apiKey = 'tcopteam-2e51730f-0653-4473-aa47-361810a7afad-ea1c8c26-8137-437d-9f95-8b5b8467d3e6'
  var templateId = 'edb26f71-138e-4ff7-b4a3-3eeca41e1b9b'
  var emailAddress = 'breandan.knowlton@digital.cabinet-office.gov.uk'
  var personalisation = {
    return_link: "http://example.com",
    report: "* First thing\n* Second thing\nSome more things"
  }
  var reference = '12345'
  var emailReplyToId = 'replyto@breandan.org'
  var NotifyClient = require('notifications-node-client').NotifyClient,
	notifyClient = new NotifyClient(apiKey)

  notifyClient
    .sendEmail(templateId, emailAddress, personalisation)
    .then(response => console.log(response))
    .catch(err => console.error(err))
  ;

  res.render('confirmation-page', { 'config': config })
})




module.exports = router
