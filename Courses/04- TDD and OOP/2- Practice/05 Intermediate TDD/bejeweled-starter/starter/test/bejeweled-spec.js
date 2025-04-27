const { expect } = require('chai');
const Cursor = require("../class/cursor.js");

const Bejeweled = require("../class/bejeweled.js");

describe('Bejeweled', function () {
  let bejeweled;

  beforeEach(function () {
    bejeweled = new Bejeweled();
  });

  // Test setup
  describe('Initialization', function () {
    it('should have a player turn of "O"', function () {
      expect(bejeweled.playerTurn).to.equal('O');
    });

    it('should initialize an empty grid', function () {
      expect(bejeweled.grid).to.be.an('array').that.is.empty;
    });

    it('should initialize a cursor', function () {
      expect(bejeweled.cursor).to.be.an.instanceOf(Cursor);
    });
  });

  // Test valid swap that matches 3
  describe('Valid Swap', function () {
    it('should match three items horizontally', function () {
      // Perform a valid horizontal swap
      bejeweled.grid = [
        ['🍓', '🍓', '🍓'],
        // ... other rows
      ];

      bejeweled.cursor.setPosition(0, 0);

      const initialGrid = [...bejeweled.grid.map(row => [...row])];

      bejeweled.grid[0][0] = '🍇';
      bejeweled.grid[0][1] = '🍓';

      expect(bejeweled.grid).to.deep.equal([
        ['🍇', '🍓', '🍓'],
        // ... other rows
      ]);

      expect(bejeweled.playerTurn).to.equal('X');

      // Check for matches after the swap
      expect(Bejeweled.checkForMatches(bejeweled.grid)).to.deep.equal([
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
      ]);

      // Check if the grid is updated correctly
      expect(bejeweled.grid).to.deep.equal(initialGrid);
    });

    it('should match three items vertically', function () {
      // Perform a valid vertical swap
      bejeweled.grid = [
        ['🍓'],
        ['🍓'],
        ['🍓'],
        // ... other rows
      ];

      bejeweled.cursor.setPosition(0, 0);

      const initialGrid = [...bejeweled.grid.map(row => [...row])];

      bejeweled.grid[0][0] = '🍇';
      bejeweled.grid[1][0] = '🍓';

      expect(bejeweled.grid).to.deep.equal([
        ['🍇'],
        ['🍓'],
        ['🍓'],
        // ... other rows
      ]);

      expect(bejeweled.playerTurn).to.equal('X');

      // Check for matches after the swap
      expect(Bejeweled.checkForMatches(bejeweled.grid)).to.deep.equal([
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
      ]);

      // Check if the grid is updated correctly
      expect(bejeweled.grid).to.deep.equal(initialGrid);
    });
  });

  // Test swaps that set up combos
  describe('Combos', function () {
    it('should trigger a combo', function () {
      // Perform swaps to set up a combo
      bejeweled.grid = [
        ['🍓', '🍓', '🍓'],
        ['🍇', '🍋', '🍇'],
        ['🥝', '🍇', '🥝'],
        // ... other rows
      ];

      bejeweled.cursor.setPosition(0, 1);

      const initialGrid = [...bejeweled.grid.map(row => [...row])];

      bejeweled.grid[0][1] = '🍇';
      bejeweled.grid[2][1] = '🍓';

      expect(bejeweled.grid).to.deep.equal([
        ['🍓', '🍇', '🍓'],
        ['🍇', '🍋', '🍇'],
        ['🥝', '🍓', '🥝'],
        // ... other rows
      ]);

      expect(bejeweled.playerTurn).to.equal('X');

      // Check for matches after the swaps
      expect(Bejeweled.checkForMatches(bejeweled.grid)).to.deep.equal([
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 2, col: 1 },
      ]);

      // Check if the grid is updated correctly
      expect(bejeweled.grid).to.deep.equal(initialGrid);
    });
  });

  // Test no possible valid moves
  describe('No Valid Moves', function () {
    it('should detect no possible valid moves', function () {
      // Set up a board with no possible valid moves

      bejeweled.grid = [
        ['🍓', '🍇', '🍓'],
        ['🍇', '🍓', '🍇'],
        ['🥝', '🍋', '🥝'],
        // ... other rows
      ];
      // Move the cursor to a position where there are no valid moves
      bejeweled.cursor.setPosition(0, 0);
      // Check if the game correctly identifies no valid moves
      expect(Bejeweled.checkForValidMoves(bejeweled.grid)).to.be.false;
    });
  });
});
