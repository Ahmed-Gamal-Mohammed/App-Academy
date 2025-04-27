const Screen = require("./screen");
const Bejeweled = require("./bejeweled"); // Import Bejeweled module

class Cursor {

  constructor(numRows, numCols, bejeweled) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

    this.bejeweled = bejeweled;

    
   

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    if (this.row > 0) {
      if (this.bejeweled.isFruitSelected) {
        const selectedSlot = this.bejeweled.grid[this.row][this.col];
        const slotAbove = this.bejeweled.grid[this.row - 1][this.col];

        // Swap positions in the grid
        this.bejeweled.grid[this.row - 1][this.col] = selectedSlot;
        this.bejeweled.grid[this.row][this.col] = slotAbove;

        // Update the screen for the new positions
        Screen.setGrid(this.row - 1, this.col, selectedSlot);
        Screen.setGrid(this.row, this.col, slotAbove);
      

        this.bejeweled.isFruitSelected = false;
       

        if (!require("./bejeweled").checkForMatches(this.bejeweled.grid)) {
          // If no match is found, revert the changes
          this.bejeweled.grid[this.row - 1][this.col] = slotAbove;
          this.bejeweled.grid[this.row][this.col] = selectedSlot;
          Screen.setGrid(this.row - 1, this.col, slotAbove);
          Screen.setGrid(this.row, this.col, selectedSlot);
         
        } else {
          // If a match is found, fill the grid
          this.bejeweled.score += 100
          Screen.setMessage(this.bejeweled.score)
          this.bejeweled.start = false;
          this.bejeweled.fillGrid();
          this.resetBackgroundColor();
          this.row--;
          this.setBackgroundColor();
          Screen.render(); 
          
        }
      } else {
        // If isFruitSelected is false, simply move the cursor up
        this.resetBackgroundColor();
        this.row--;
        this.setBackgroundColor();
        Screen.render(); // Added render after the update
      }
    }
  }


  // Move cursor down
  down() {
    if (this.row < this.numRows - 1) {
      if (this.bejeweled.isFruitSelected) {
        const selectedSlot = this.bejeweled.grid[this.row][this.col];
        const slotAbove = this.bejeweled.grid[this.row + 1][this.col];

        // Swap positions in the grid
        this.bejeweled.grid[this.row + 1][this.col] = selectedSlot;
        this.bejeweled.grid[this.row][this.col] = slotAbove;

        // Update the screen for the new positions
        Screen.setGrid(this.row + 1, this.col, selectedSlot);
        Screen.setGrid(this.row, this.col, slotAbove);


        this.bejeweled.isFruitSelected = false;


        if (!require("./bejeweled").checkForMatches(this.bejeweled.grid)) {
          // If no match is found, revert the changes
          this.bejeweled.grid[this.row +1][this.col] = slotAbove;
          this.bejeweled.grid[this.row][this.col] = selectedSlot;
          Screen.setGrid(this.row + 1 , this.col, slotAbove);
          Screen.setGrid(this.row, this.col, selectedSlot);

        } else {
          this.bejeweled.score += 100
          Screen.setMessage(this.bejeweled.score)
          this.bejeweled.start = false;
          this.bejeweled.fillGrid();
          this.resetBackgroundColor();
          this.row++;
          this.setBackgroundColor();
          Screen.render();

        }
      } else {
        // If isFruitSelected is false, simply move the cursor up
        this.resetBackgroundColor();
        this.row++;
        this.setBackgroundColor();
        Screen.render(); // Added render after the update
      }
    }

    // if (this.row < this.numRows - 1) {
    //   this.resetBackgroundColor();
    //   this.row++;
    //   this.setBackgroundColor();
    // }
  }

  // Move cursor left
  left() {


    if (this.col > 0) {
      if (this.bejeweled.isFruitSelected) {
        const selectedSlot = this.bejeweled.grid[this.row][this.col];
        const slotAbove = this.bejeweled.grid[this.row ][this.col -1];

        // Swap positions in the grid
        this.bejeweled.grid[this.row ][this.col -1] = selectedSlot;
        this.bejeweled.grid[this.row][this.col] = slotAbove;

        // Update the screen for the new positions
        Screen.setGrid(this.row , this.col -1, selectedSlot);
        Screen.setGrid(this.row, this.col, slotAbove);


        this.bejeweled.isFruitSelected = false;


        if (!require("./bejeweled").checkForMatches(this.bejeweled.grid)) {
          // If no match is found, revert the changes
          this.bejeweled.grid[this.row ][this.col -1] = slotAbove;
          this.bejeweled.grid[this.row][this.col] = selectedSlot;
          Screen.setGrid(this.row , this.col -1, slotAbove);
          Screen.setGrid(this.row, this.col, selectedSlot);

        } else {
          // If a match is found, fill the grid
          this.bejeweled.score += 100
          Screen.setMessage(this.bejeweled.score)
          this.bejeweled.start = false;
          this.bejeweled.fillGrid();
          this.resetBackgroundColor();
          this.col--;
          this.setBackgroundColor();
          Screen.render();

        }
      } else {
        // If isFruitSelected is false, simply move the cursor up
        this.resetBackgroundColor();
        this.col --;
        this.setBackgroundColor();
        Screen.render(); // Added render after the update
      }
    }
    // if (this.col > 0) {
    //   this.resetBackgroundColor();
    //   this.col--;
    //   this.setBackgroundColor();
    }
  

  // Move cursor right
  right() {

    if (this.col < this.numCols - 1) {
      if (this.bejeweled.isFruitSelected) {
        const selectedSlot = this.bejeweled.grid[this.row][this.col];
        const slotAbove = this.bejeweled.grid[this.row ][this.col + 1];

        // Swap positions in the grid
        this.bejeweled.grid[this.row ][this.col + 1] = selectedSlot;
        this.bejeweled.grid[this.row][this.col] = slotAbove;

        // Update the screen for the new positions
        Screen.setGrid(this.row , this.col + 1, selectedSlot);
        Screen.setGrid(this.row, this.col, slotAbove);


        this.bejeweled.isFruitSelected = false;


        if (!require("./bejeweled").checkForMatches(this.bejeweled.grid)) {
          // If no match is found, revert the changes
          this.bejeweled.grid[this.row ][this.col + 1] = slotAbove;
          this.bejeweled.grid[this.row][this.col] = selectedSlot;
          Screen.setGrid(this.row , this.col +1, slotAbove);
          Screen.setGrid(this.row, this.col, selectedSlot);

        } else {
          // If a match is found, fill the grid
          this.bejeweled.score += 100
          Screen.setMessage(this.bejeweled.score)
          this.bejeweled.start = false;
          this.bejeweled.fillGrid();
          this.resetBackgroundColor();
          this.col++;
          this.setBackgroundColor();
          Screen.render();
        }
      } else {
        // If isFruitSelected is false, simply move the cursor up
        this.resetBackgroundColor();
        this.col++;
        this.setBackgroundColor();
        Screen.render(); // Added render after the update
      }
    }
  //   if (this.col < this.numCols - 1) {
  //     this.resetBackgroundColor();
  //     this.col++;
  //     this.setBackgroundColor();
  //   }
  // }
}




}


module.exports = Cursor;
