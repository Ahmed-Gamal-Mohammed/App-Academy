const { expect } = require('chai');
const Cursor = require("../class/cursor.js");
const Bejeweled = require("../class/bejeweled.js");
const sinon = require('sinon'); // Using Sinon for mocking

describe('Cursor', function () {
  let cursor;
  

  beforeEach(function () {
    // Create a stub for the Bejeweled constructor
   

    // Create a new Cursor instance
    cursor = new Cursor(8, 8);

    // Create a new Bejeweled instance without starting the game

    // bejeweled.cursor = cursor;

    // Reset the stubs
    
  });

  it('initializes for an 8x8 grid', function () {
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
  });

  describe('When a gem is not selected', function () {
    it('processes down inputs', function () {
      cursor.down();
      expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);
      cursor.down();
      expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
      cursor.down();
      expect([cursor.row, cursor.col]).to.deep.equal([3, 0]);
    });

    it('correctly processes up inputs', function () {
      cursor.up();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
      cursor.down();
      expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);
      cursor.up();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
    });

    it('processes right inputs', function () {
      cursor.right();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);
      cursor.right();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
      cursor.right();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 3]);
    });

    it('processes left inputs', function () {
      cursor.left();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
      cursor.right();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);
      cursor.left();
      expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
    });
  

    describe('When a gem is selected and there are valid moves', function () {
      beforeEach(function () {
        cursor.selectGem();
        sinon.stub(Bejeweled, 'checkForValidMoves').returns(true);
      });

      afterEach(function () {
        sinon.restore();
      });

      it('allows the cursor to move down', function () {
        const initialPosition = [cursor.row, cursor.col];
        cursor.down();
        expect([cursor.row, cursor.col]).to.not.deep.equal(initialPosition);
      });

      it('allows the cursor to move up', function () {
        const initialPosition = [cursor.row, cursor.col];
        cursor.up();
        expect([cursor.row, cursor.col]).to.not.deep.equal(initialPosition);
      });

      it('allows the cursor to move right', function () {
        const initialPosition = [cursor.row, cursor.col];
        cursor.right();
        expect([cursor.row, cursor.col]).to.not.deep.equal(initialPosition);
      });

      it('allows the cursor to move left', function () {
        const initialPosition = [cursor.row, cursor.col];
        cursor.left();
        expect([cursor.row, cursor.col]).to.not.deep.equal(initialPosition);
      });
    });
  

  describe('When a gem is selected and there are no valid moves', function () {
    beforeEach(function () {
      cursor.selectGem();
      sinon.stub(Bejeweled, 'checkForValidMoves').returns(false);
      
    });
      afterEach(function () {
        sinon.restore();
      });

    it('does not move down', function () {
      const initialPosition = [cursor.row, cursor.col];
      cursor.down();
      expect([cursor.row, cursor.col]).to.deep.equal(initialPosition);
    });

    it('does not move up', function () {
      const initialPosition = [cursor.row, cursor.col];
      cursor.up();
      expect([cursor.row, cursor.col]).to.deep.equal(initialPosition);
    });

    it('does not move right', function () {
      const initialPosition = [cursor.row, cursor.col];
      cursor.right();
      expect([cursor.row, cursor.col]).to.deep.equal(initialPosition);
    });

    it('does not move left', function () {
      const initialPosition = [cursor.row, cursor.col];
      cursor.left();
      expect([cursor.row, cursor.col]).to.deep.equal(initialPosition);
    });
  });
  });
});

