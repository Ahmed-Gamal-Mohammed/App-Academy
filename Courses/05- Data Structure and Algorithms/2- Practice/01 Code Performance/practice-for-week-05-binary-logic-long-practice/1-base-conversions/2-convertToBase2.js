// Convert the integers in the console.logs below to base 2
const { convertToBase10 } = require('./1-convertToBase10');

/******************************************************************************/
const convertToBase2 = element => {

  if (typeof element === 'string') {
    element = convertToBase10(element);
  }

  if (2 > element) {
    return '0b' + String(element);
  }

  let remainder = String(element % 2);

  element = Math.floor(element / 2);

  return convertToBase2(element) + remainder;
};

/******************************************************************************/

// console.log(convertToBase2(4)); // 0b100
// console.log(convertToBase2(65)); // 0b1000001
// console.log(convertToBase2(256)); // 0b100000000
// console.log(convertToBase2(123)); // 0b1111011
// console.log(convertToBase2(1000)); // 0b1111101000

// console.log('––––––');

// console.log(convertToBase2('0xf')); // 0b1111
// console.log(convertToBase2('0xfa')); // 0b11111010
// console.log(convertToBase2('0x1234')); // 0b1001000110100
// console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
// console.log(convertToBase2('0xbf12')); // 0b1011111100010010

//console.log(convertToBase2(2));

module.exports = convertToBase2;
