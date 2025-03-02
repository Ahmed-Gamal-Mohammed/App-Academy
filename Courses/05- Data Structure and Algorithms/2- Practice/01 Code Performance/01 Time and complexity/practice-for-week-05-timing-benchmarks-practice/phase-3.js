const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let start = Date.now();
  let result = [];

  for (let i = increment; i <= increment * 10; i += increment) {
    result.push(addNums(i));
  }
  let end = Date.now();

  return end - start

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let start = Date.now();
  let result = [];

  for (let i = increment; i <= increment * 10; i += increment) {
    result.push(addManyNums(i));
  }
  let end = Date.now();

  return end - start

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
