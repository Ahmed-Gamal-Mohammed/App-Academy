// Your code here
const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");


describe("Reverse String Function",function(){

    it("Should return a string reversed",() =>{

        const funReverse = reverseString('fun');
        expect(funReverse).to.equal('nuf');
    });

    it("should throw a TypeError if input is not string", () =>{
        const errorReverse = () => reverseString([1, 2, 3]);
        expect(errorReverse).to.throw(TypeError, 'Input must be a string');
    });

});
