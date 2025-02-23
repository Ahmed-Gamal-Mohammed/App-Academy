const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);


    // this.moveUp = this.moveUp.bind(this);
    // this.moveDown = this.moveDown.bind(this);
    // this.moveLeft = this.moveLeft.bind(this);
    // this.moveRight = this.moveRight.bind(this);
    // this.makeMove = this.makeMove.bind(this);

      // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', this.testCommand);
    Screen.addCommand('up', 'up command ', this.moveUp);
    Screen.addCommand('down', 'down command ', this.moveDown);
    Screen.addCommand('right', 'right command ', this.moveRight);
    Screen.addCommand('left', 'left command ', this.moveLeft);
    Screen.addCommand('o', 'player 1 piece ', this.makeMove);
    Screen.addCommand('x', 'player 2 piece ', this.makeMove);


    Screen.render();
  }

  moveUp = ()=>{
    this.cursor.resetBackgroundColor()

    this.cursor.up()
    this.cursor.setBackgroundColor()
    Screen.render()
  }

  moveDown = () =>{
    this.cursor.resetBackgroundColor()

    this.cursor.down()
    this.cursor.setBackgroundColor();
    Screen.render();

  }

  moveLeft = () => {

    this.cursor.resetBackgroundColor()
    this.cursor.left()
    this.cursor.setBackgroundColor()
    Screen.render()

  }

  moveRight = () =>{
    this.cursor.resetBackgroundColor()

    this.cursor.right();
    this.cursor.setBackgroundColor()
    Screen.render();

  }


  makeMove() {

    if (this.grid[this.cursor.row][this.cursor.col] === ' ') {
        // Set the cell with the player's letter ('O' or 'X')
        const playerLetter = (this.playerTurn === 'O') ? 'O' : 'X';
        this.grid[this.cursor.row][this.cursor.col] = playerLetter;

        // Bind setGrid method to the current instance of Screen
        const setGrid = Screen.setGrid.bind(Screen);

        // Call the setGrid method to update the grid
        setGrid(this.cursor.row, this.cursor.col, playerLetter);

        // Inform the player about the move

        Screen.message =`Player ${this.playerTurn} placed their piece at (${this.cursor.row}, ${this.cursor.col})`;

        // Update the screen to reflect the move

        Screen.render();



        // Switch player turn
        this.playerTurn = (this.playerTurn === 'O') ? 'X' : 'O';
    } else {
        // Inform the player that the cell is already taken
        console.log('This cell is already taken. Please choose another one.');
    }

    if(checkWin(this.grid)!== false) endGame(checkWin(this.grid))
    Screen.message =`${this.playerTurn}'s move`

}


  static checkWin =(grid) =>{
    // Check rows for a winner
    for (let row = 0; row < 3; row++) {
      if (grid[row][0] === grid[row][1] && grid[row][1] === grid[row][2]) {
        if (grid[row][0] === 'X') return 'X';
        if (grid[row][0] === 'O') return 'O';
      }
    }

    // Check columns for a winner
    for (let col = 0; col < 3; col++) {
      if (grid[0][col] === grid[1][col] && grid[1][col] === grid[2][col]) {
        if (grid[0][col] === 'X') return 'X';
        if (grid[0][col] === 'O') return 'O';
      }
    }

    // Check first diagonal for a winner
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
      if (grid[0][0] === 'X') return 'X';
      if (grid[0][0] === 'O') return 'O';
    }

    // Check second diagonal for a winner
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
      if (grid[0][2] === 'X') return 'X';
      if (grid[0][2] === 'O') return 'O';
    }

    // Check if the game is a tie (no empty spaces left)
    let isTie = true;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === ' ') {
          isTie = false;
          break;
        }
      }
      if (!isTie) break;
    }

    if (isTie) return 'T'; // Tie

    // If no winner and no tie, the game is not over
    return false;
  }
  static endGame = (winner) =>{
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

module.exports = TTT;
