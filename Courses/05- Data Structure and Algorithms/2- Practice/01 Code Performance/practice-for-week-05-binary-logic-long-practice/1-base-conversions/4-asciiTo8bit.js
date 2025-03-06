const addZeros = require('../utils/addZeros');
const convertToBase2 = require('./2-convertToBase2')

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let asciiString = "";

  for (let idx = 0; idx < str.length; idx++) {

    let char = str[idx];

    let asciiChar = char.charCodeAt(0);

    let binaryEquivalent = convertToBase2(asciiChar);

    let paddedBits = addZeros(binaryEquivalent.slice(2), 8);

    asciiString += paddedBits;
  }

  return asciiString;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
