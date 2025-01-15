/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

function restSum(...otherNums) {
  // Your code here
  let sum = 0;
  otherNums.forEach(function(num){
    sum += num;
  });

  return sum;
}

function restSum2(...otherNums) {
  // Initialize a variable to keep track of the sum
  let sum = 0;

  // Use a traditional for loop to iterate through the array
  for (let i = 0; i < otherNums.length; ++i) {
    sum += otherNums[i]; // Add each number to the sum
  }

  // Return the total sum
  return sum;
}

function restSum3(...otherNums) {
  // Initialize a variable to keep track of the sum
  let sum = 0;

  // Loop through each number and add it to the sum
  for (let num of otherNums) {
    sum += num;
  }

  // Return the total sum
  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
