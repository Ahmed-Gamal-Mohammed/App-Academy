const findMinimum = arr => {
  // The time complexity is O(n) and space is O(1)
  // it can be optimzied by sort the array then return the first element
  // this proccess take O(log n)
  // Your code here
  let min_val = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if(arr[index] < min_val){
      min_val = arr[index];
    }
  }

  return min_val;
};


const runningSum = arr => {
  return arr.reduce((acc, curr, index) => {
    if (index === 0) {
      acc.push(curr);
    } else {
      acc.push(acc[index - 1] + curr);
    }
    return acc;
  }, []);
};


const evenNumOfChars = arr => {
  return arr.filter(str => str.length % 2 === 0).length;
};

const smallerThanCurr = arr => {
  return arr.map((num, i) => {
    return arr.filter((n, j) => j !== i && n < num).length;
  });
};


const twoSum = (arr, target) => {
  // O(n), O(1)
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true
    }
  }

  return false
};

const secondLargest = arr => {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return sortedArr[1];
};

const shuffle = (arr) => {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
};

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
