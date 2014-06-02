/* global describe, it */
'use strict';
var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

//don't use es6
//name of file to test
describe('calculator', function(){
  //name of function to test
  //pound is instance dot is class
  //strings have nothing to do with code, could be whatever
  describe('.add', function(){
    //description of what you are testing
    it('should add two numbers', function(){
      //assertion: assert either true or false
      var sum = Calculator.add(2, 3);
      //called chi
      expect(sum).to.equal(5);
      //test need specific input and
      //expect specific output
    });
  });
  describe('.subtract', function(){
    it('should subtract two numbers', function(){
      var difference = Calculator.subtract(3, 2);
      expect(difference).to.equal(1);
      var difference2 = Calculator.subtract(-4, -2);
      expect(difference2).to.equal(-2);
    });
  });
  describe('.pow', function(){
    it('should return the power of two numbers', function(){
      var power = Calculator.pow(3, 2);
      expect(power).to.equal(9);
      var power2 = Calculator.pow(3, 3);
      expect(power2).to.equal(27);
    });
  });
  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([3,4,5]);
      expect(sum).to.equal(12);
    });
  });
  describe('.createFractions', function(){
    it('should convert to fractions', function(){
      var fractions = Calculator.createFractions(['1/2', '3/4']);
      console.log(fractions);
      // expect(summary).to.equal(['5/4']);
    });
  });
});
