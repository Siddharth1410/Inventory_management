var express = require('express')
var router = express.Router()

/**
 * @api {get} / App Entry Point
 * @apiDescription Primary index page for Inventory Management Web App.
 * @apiName GetIndex
 * @apiGroup Index
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
