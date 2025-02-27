const chai = require("chai");
const expect = chai.expect;
const { Word } = require("../class");

describe("Word", function () {
  let word;
  beforeEach(() => {
    word = new Word('testing')
  })
  // Done
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("testing");
    });
  });


  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      const removedVowels = word.removeVowels();
      expect(removedVowels).to.equal('tstng');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const removedConsonants = word.removeConsonants();
      expect(removedConsonants).to.equal('ei');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const latinWord = word.pigLatin();
      expect(latinWord).to.equal('estingtay');
    });
  });
});
