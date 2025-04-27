const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = Array.from({ length: 8 }, () => Array(8).fill(' '));

    this.cursor = new Cursor(8, 8, this);
    this.isFruitSelected = false;
    this.start = true;
    this.score = 0;

    Screen.initialize(8, 8);
    Screen.setGridlines(false);
    this.fillGrid();

    this.cursor.setBackgroundColor();
    Screen.render();


    // Replace this with real commands
    Screen.addCommand('up', 'Press up to go up',
      () => { this.cursorMove(this.cursor.up); });

    Screen.addCommand('down', 'Press down to go down',
      () => { this.cursorMove(this.cursor.down); });

    Screen.addCommand('right', 'Press right to go right',
      () => { this.cursorMove(this.cursor.right); });

    Screen.addCommand('left', 'Press left to go Left',
      () => { this.cursorMove(this.cursor.left); });

    Screen.addCommand('return', 'Press return to place move',
      () => { this.selectFruit(); });
    

    Screen.render();
  }

  selectFruit() {
    
      this.isFruitSelected = true;
      Screen.setBackgroundColor(this.cursor.row, this.cursor.col, "red");
      Screen.render();
     
    
  
}

  cursorMove(cursorMoveFunction) {
    cursorMoveFunction.call(this.cursor);
    Screen.render();
  }
   
 
  static checkForValidMoves(grid) {
    
  }
  // second we check for Matches already existing in the grid
  static checkForMatches(grid) {
    // horizantal checking
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 2; col++) {
        if (
          grid[row][col] !== " " &&
          grid[row][col] === grid[row][col + 1] &&
          grid[row][col + 1] === grid[row][col + 2]
        ) {
          
          return  [ { row: row, col: col },
                    { row: row, col: col + 1 },
                    { row: row, col: col + 2 } ]
          
        }
      }
    }

    // vertical checking
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 2; row++) {
        if (
          grid[row][col] !== " " &&
          grid[row][col] === grid[row + 1][col] &&
          grid[row + 1][col] === grid[row + 2][col]
        ) {
          
         return   [ { row: row, col: col },
                    { row: row + 1, col: col },
                    { row: row + 2, col: col } ]
          
        }
      }
    }
    return false;
  }
  // third we map out all the matched postions in the grid 
  // matchPositions(grid){
  //  while(Bejeweled.checkForMatches(grid)){
  //   const matchedPositions = Bejeweled.checkForMatches(grid);
  //   matchedPositions.forEach( position => {
  //     grid[position.row][position.col] = " "
  //   })
  //  }
  //     }
    // implementing a method for filling the rows that has been removed
  fillMatchedPositions(position) {
    const { row, col } = position;

    // Check if the row above is not out of bounds and not empty
    if (row > 0 && this.grid[row - 1][col] !== " ") {
      // Swap positions
      [this.grid[row][col], 
       this.grid[row - 1][col]] = [this.grid[row - 1][col],
                                   this.grid[row][col]];
                                                          
       
      // Update the screen
      Screen.setGrid(row, col, this.grid[row][col]);
      Screen.setGrid(row - 1, col, this.grid[row - 1][col]);

      // Continue checking and filling above until the top of the grid
      this.fillMatchedPositions({ row: row - 1, col });
    } else {
      // Find the first non-empty row above and swap positions
      let swapRow = row - 1;
      while (swapRow >= 0 && this.grid[swapRow][col] === " ") {
        swapRow--;
      }
      if (swapRow >= 0) {
        [this.grid[row][col], this.grid[swapRow][col]] = [
          this.grid[swapRow][col],
          this.grid[row][col],
        ];
        // Update the screen
        Screen.setGrid(row, col, this.grid[row][col]);
        Screen.setGrid(swapRow, col, this.grid[swapRow][col]);

        // Continue checking and filling above until the top of the grid
        this.fillMatchedPositions({ row: swapRow, col });
      }
    }
  }

  
 

    // 1st we fill up the grid with fruits 
   fillGrid() {
    
    const fruits = ['🍏', '🍇', '🥝', '🥥','🍓'];

   if(this.start === true ){
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        this.grid[row][col] = randomFruit;
        // Set each slot individually
        Screen.setGrid(row, col, randomFruit);
      }
    }
  }
      // third we should map all the matched positons in the grid
    let  matchedPositions = Bejeweled.checkForMatches(this.grid);
      while (matchedPositions) {
        
        matchedPositions.forEach(position => {
          this.grid[position.row][position.col] = " "
          Screen.setGrid(position.row, position.col, " ");

          this.fillMatchedPositions(position);

          


          
          

        })
        // this.fillMatchedPositions(matchedPositions);
        // Render the updated grid after removing matches
        Screen.render();

        // Check for matches again
        matchedPositions = Bejeweled.checkForMatches(this.grid);
        
      }

    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        if(this.grid[row][col]=== " "){

        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        this.grid[row][col] = randomFruit;
        // Set each slot individually
        Screen.setGrid(row, col, randomFruit);
      }
    }
    }
    

    // Render the updated grid
    Screen.render();
    if(Bejeweled.checkForMatches(this.grid)){
      this.start = false;
      return this.fillGrid() }
      else{
    return;}
  }
 

}

module.exports = Bejeweled;
