// Your code here
const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("Return three function",()=>{
    it("should return 3",() =>{
        const result = returnsThree();
        expect(result).to.equal(3);
    });
});

describe("reciprocal function",()=>{

    context("With valid arguments", function(){
        it("should return reciprocal value",() =>{
            expect(reciprocal(2)).to.equal(0.5);
            expect(reciprocal(10)).to.equal(0.1);
            expect(reciprocal(100)).to.equal(0.01);
        });
    });

    context("With invalid arguments", function(){
        it('should throw a TypeError when the input is less than 1', function () {
            expect(() => reciprocal(0)).to.throw(TypeError, 'Input must be between 1 and 1,000,000');
            expect(() => reciprocal(-5)).to.throw(TypeError, 'Input must be between 1 and 1,000,000');
        });

        it('should throw a TypeError when the input is greater than 1,000,000', function () {
            expect(() => reciprocal(1000001)).to.throw(TypeError, 'Input must be between 1 and 1,000,000');
        });
    });

});
