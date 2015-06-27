'use strict'
var express = require('express');
var router = express.Router();
var parser = require('./parser');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(parser);
  res.send({ dust: parser});
  // res.json({ message: 'People updated!' });
});

module.exports = router;
