const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {
    this.playerTurn = "O"; // Player 'O' starts first
    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize the screen
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Add commands for player input
    Screen.addCommand('left', 'Move cursor left', this.moveLeft.bind(this));
    Screen.addCommand('right', 'Move cursor right', this.moveRight.bind(this));
    Screen.addCommand('space', 'Drop piece', this.dropPiece.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  moveLeft() {
    this.cursor.left();
    Screen.render();
  }

  moveRight() {
    this.cursor.right();
    Screen.render();
  }

  dropPiece() {
    const col = this.cursor.col;
    for (let row = this.grid.length - 1; row >= 0; row--) {
      if (this.grid[row][col] === ' ') {
        this.grid[row][col] = this.playerTurn;
        this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O'; // Switch turns
        Screen.setGrid(this.grid);
        Screen.render();

        const winner = ConnectFour.checkWin(this.grid);
        if (winner) {
          ConnectFour.endGame(winner);
        }
        break;
      }
    }
  }

  static checkWin(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Check horizontal, vertical, and diagonal wins
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (grid[row][col] !== ' ' &&
            grid[row][col] === grid[row][col + 1] &&
            grid[row][col] === grid[row][col + 2] &&
            grid[row][col] === grid[row][col + 3]) {
          return grid[row][col];
        }
      }
    }

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows - 3; row++) {
        if (grid[row][col] !== ' ' &&
            grid[row][col] === grid[row + 1][col] &&
            grid[row][col] === grid[row + 2][col] &&
            grid[row][col] === grid[row + 3][col]) {
          return grid[row][col];
        }
      }
    }

    for (let row = 0; row < rows - 3; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (grid[row][col] !== ' ' &&
            grid[row][col] === grid[row + 1][col + 1] &&
            grid[row][col] === grid[row + 2][col + 2] &&
            grid[row][col] === grid[row + 3][col + 3]) {
          return grid[row][col];
        }
      }
    }

    for (let row = 3; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (grid[row][col] !== ' ' &&
            grid[row][col] === grid[row - 1][col + 1] &&
            grid[row][col] === grid[row - 2][col + 2] &&
            grid[row][col] === grid[row - 3][col + 3]) {
          return grid[row][col];
        }
      }
    }

    // Check for tie
    if (grid.every(row => row.every(cell => cell !== ' '))) {
      return 'T';
    }

    return false; // No winner yet
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = ConnectFour;
