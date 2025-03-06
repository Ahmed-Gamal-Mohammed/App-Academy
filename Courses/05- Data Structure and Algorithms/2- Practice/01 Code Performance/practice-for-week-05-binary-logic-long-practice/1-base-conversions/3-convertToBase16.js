// Convert the integers in the console.logs below to base 16:
const {convertToBase10, hexMappings } = require('./1-convertToBase10');

/******************************************************************************/

const findKeys = (obj, val) => {
  for (key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
}

const convertToBase16 = element => {

  if (typeof element === 'string') {
    element = convertToBase10(element);
  }

  if (element < 10) {
    return '0x' + String(element);
  } else if (element >= 10 && element < 16) {

    let hexLetter = findKeys(hexMappings, element);

    return '0x' + hexLetter;
  }

  let remainder = element % 16;

  if (remainder >= 10 && remainder < 16) {
    remainder = findKeys(hexMappings, remainder);
  } else {
    remainder = String(remainder);
  }

  element = Math.floor(element / 16);

  return convertToBase16(element) + remainder;
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33

console.log('');
