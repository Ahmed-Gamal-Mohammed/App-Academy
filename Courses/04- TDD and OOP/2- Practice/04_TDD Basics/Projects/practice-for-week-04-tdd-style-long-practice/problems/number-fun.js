function returnsThree() {
  // Your code here

  return 3;
}

function reciprocal(n) {
  // Your code here


  if (typeof n !== 'number') {
    throw new TypeError("Input must be a number.");
  }
    // Validate input range
  if (n < 1 ||  n > 1000000) {
    throw new TypeError("Input must be between 1 and 1,000,000 (inclusive).");
  }
  let result = 1 / n;
  return result;
}

module.exports = {
  returnsThree,
  reciprocal
};
