const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "X";

    this.grid = [ [' ', ' ', ' '],
                  [' ', ' ', ' '],
                  [' ', ' ', ' ']]


    this.cursor = new Cursor(3, 3);


    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    Screen.addCommand('w', 'Press w to go Up', () => { this.cursorMove(this.cursor.up); });
    Screen.addCommand('s', 'Press s to go Down', () => { this.cursorMove(this.cursor.down); });
    Screen.addCommand('a', 'Press a to go Left', () => { this.cursorMove(this.cursor.left); });
    Screen.addCommand('d', 'Press d to go Rsight', () => { this.cursorMove(this.cursor.right); });

    // Add command for placing a move
    Screen.addCommand('j', 'Press j to place move', () => { this.placeMove(); });

    Screen.render();
  }


  cursorMove(cursorMoveFunction) {
    cursorMoveFunction.call(this.cursor);
    Screen.render();
  }

  placeMove() {
    const newRow = this.cursor.row;
    const newCol = this.cursor.col;

    if (this.grid[newRow][newCol] === ' ') {
      this.grid[newRow][newCol] = this.playerTurn;
      Screen.setGrid(newRow, newCol, this.grid[newRow][newCol]);

      const winResult = TTT.checkWin(this.grid);
      if (winResult) {
        TTT.endGame(winResult);
      } else {
        this.switchPlayerTurn();
        this.computerMove();
      }
    }

    Screen.render();
  }

  switchPlayerTurn() {
    this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
  }

  computerMove() {
    const computerMove = require("../class/computer-player").getSmartMove(this.grid, 'O');
    if (computerMove) {
      const { row, col } = computerMove;
      this.grid[row][col] = 'O';
      Screen.setGrid(row, col, 'O');

      const winResult = TTT.checkWin(this.grid);
      if (winResult) {
        TTT.endGame(winResult);
      } else {
        this.switchPlayerTurn();
      }
    }

    Screen.render();
  }


  static checkWin(grid) {
    for (let row = 0; row < 3; row++) {
      if (grid[row][0] !== ' ' && grid[row][0] === grid[row][1] && grid[row][1] === grid[row][2]) {
        // If a player has filled the entire row, return the player symbol (X or O)
        return grid[row][0];
      }
    }

    // Check for vertical wins
    for (let col = 0; col < 3; col++) {
      if (grid[0][col] !== ' ' && grid[0][col] === grid[1][col] && grid[1][col] === grid[2][col]) {
        // If a player has filled the entire column, return the player symbol (X or O)
        return grid[0][col];
      }
    }

    // Check for diagonal wins (top-left to bottom-right)
    if (grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      return grid[0][0];
    }

    // Check for diagonal wins (top-right to bottom-left)
    if (grid[0][2] !== ' ' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      return grid[0][2];
    }

    // Check for a tie (if there are no empty spaces left)
    const isTie = grid.every(row => row.every(cell => cell !== ' '));
    if (isTie) {
      return 'T'; // Return 'T' for tie
    }

    // If no winner and the game is not a tie, return false to indicate the game hasn't ended yet

    return false;


    // If there is a winner or the game is a tie, end the game

  }




  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tied game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
