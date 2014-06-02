/* global ratio:true */
'use strict';

// var ratio = require('ratio');

class Calculator {
  static add (x, y){
    return x + y;
  }
  static subtract (x, y){
    return x - y;
  }
  static pow (x, y){
    // return Math.pow(x, y);
    var ans = 1;
    for(;y > 0; y--){
      ans *= x;
    }
    return ans;
  }
  static sum (array){
    var x = 0;
    for (var i=0; i < array.length; i++){
      x += array[i];
    }
    return x;
  }
  // static createFractions (array) {
  //   var fractions = array.map(fraction=>{
  //     return fraction.split('/');
  //   });
  //   var ratioObjArray = fractions.map(a=>{
  //     return ratio(a[0], a[1]);
  //   });
  //   return ratioObjArray;
  // }
  // static addFractions (array){
  //   var fractions = createFractions(array);
  //   var answer = fractions.map(a=>{
  //
  //   });
  // }
}

module.exports = Calculator;
