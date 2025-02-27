function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new Error("this is ivalid input");
  } else if (number % 2 === 0) {
    return false;
  }

  return true;
}

function myRange(min, max, step = 1) {
  // Your code here
  const result  = [];
  if (step === 1) {
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
  } else {
    for (let i = min; i <= max; i+= step) {
      result.push(i);
    }
  }

  return result;
}


module.exports = { isFive, isOdd, myRange };
