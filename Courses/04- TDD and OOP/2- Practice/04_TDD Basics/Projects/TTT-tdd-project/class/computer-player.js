const TTT = require("./ttt");
class ComputerPlayer {


  static getValidMoves(grid) {
    const validMoves = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === ' ') {
          validMoves.push({ row, col });
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    const validMoves = this.getValidMoves(grid);
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    return validMoves[randomIndex];
    // Your code here
  }

  static getWinningMoves(grid, symbol) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === ' ') {
          grid[row][col] = symbol;

          // Check if the current move results in a win
          if (TTT.checkWin(grid) === symbol) {
            grid[row][col] = ' '; // Reset the grid to its original state
            return { row, col };
          }

          grid[row][col] = ' '; // Reset the grid to its original state
        }
      }
    }

    // If no winning move is found, return a random move
    return null;
  }

    // Your code here



  static getSmartMove(grid, symbol) {
    // Check for a winning move for the player
    const winningMove = this.getWinningMoves(grid, symbol);
    if (winningMove) {
      return winningMove;
    }

    // Check for a blocking move for the opponent
    const opponentSymbol = symbol === 'X' ? 'O' : 'X';
    const blockingMove = this.getWinningMoves(grid, opponentSymbol);
    if (blockingMove) {
      return blockingMove;
    }

    // If no winning or blocking move, return a random move
    return this.randomMove(grid);
  }
}



module.exports = ComputerPlayer;
