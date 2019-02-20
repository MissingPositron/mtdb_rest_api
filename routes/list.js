var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var querystring = require('querystring');
var List = require('../models/List.js');

// Get all test items
router.get('/', function(req, res, next) {
  List.find(function(err, products) {
    if (err) return next(err);
    res.json(products)
  });
});

// Get single test item record by ID
router.get('/:id', function(req, res, next) {
  List.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
