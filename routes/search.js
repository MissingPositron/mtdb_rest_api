var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var querystring = require('querystring');
var List = require('../models/List.js');

router.get('/', async function(req, res, next) {
  
  let tech = req.query.tech;
  let mt = req.query.mt;
  let prod = req.query.prod;
  let pack = req.query.pack;
  let die = req.query.die;
  let tester = req.query.tester;
  
//   console.log(tech);
//   console.log(mt);
//   console.log(prod);
//   console.log(pack);
//   console.log(die);
//   console.log(tester);

  List.find(function(err, products) {
    if (err) return next(err);
    
    var content = [];
    for ( var i in products){
      if (
        products[i].tech == tech &&
        products[i].MT_stage.indexOf(mt) > -1 &&
        products[i].package.indexOf(prod) > -1 &&
        products[i].package.indexOf(pack) > -1 &&
        products[i].die_stack.indexOf(die) > -1 &&
        ((products[i].T5773_available && tester==="5773") || (products[i].T5831_available && tester==="5831"))
        ) {
        content.push(products[i].tb_name)
      }
    }
    res.send(content);
  });
});

module.exports = router;
