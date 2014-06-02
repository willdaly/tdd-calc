'use strict';

// var traceur = require('traceur');
// var Calc = traceur.require(__dirname + '/../models/calc.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};
