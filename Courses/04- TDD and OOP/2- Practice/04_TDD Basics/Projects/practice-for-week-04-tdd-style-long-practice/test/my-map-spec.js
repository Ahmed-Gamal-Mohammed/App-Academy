// Your code here
const myMap = require("../problems/my-map");
const chai = require("chai");
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

describe("myMap function", function(){
    const arr = [1, 2, 3];
    const callback = (el) => el * 2;
    const mapSpy = chai.spy.on(arr, 'map');
    let callbackSpy;
    let mapArr;

    beforeEach(() => {
        callbackSpy = chai.spy(callback);
        mapArr = myMap(arr, callbackSpy);
    });

    it('should act like Array.map(), applying the input callback to each element of the input array', () => {
        expect(mapArr).to.eql([2, 4, 6]);
    });

    it('should not affect the original array', () => {
        expect(arr).to.eql([1, 2, 3]);
    });

    it('should not call Array.map()', () => {
        expect(mapSpy).to.not.have.been.called();
    });

    it('should invoke the callback once for each element of the array', () => {
        expect(callbackSpy).to.have.been.called.exactly(arr.length);
    });
});
