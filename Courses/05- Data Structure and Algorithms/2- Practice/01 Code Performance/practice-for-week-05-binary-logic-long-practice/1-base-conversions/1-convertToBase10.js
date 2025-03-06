// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const hexMappings = {a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};

const convertToBase10 = str => {
  // Your code here
  //loop through the string
  //convert each char to Number
  //multiply each number by 2^position
  //sum all numbers

  let sum = 0;
  let exp = 0;
  let baseType = str[1].toLowerCase();
  str = str.slice(2);

  for (let idx = str.length - 1; idx >= 0; idx--) {

    let num = Number(str[idx]);

    if (baseType === 'b') {

      sum += (num * (2 ** exp));

      exp++;
    } else if (baseType === 'x') {

      if (Number.isNaN(num)) {

        let hexNum = hexMappings[str[idx]];

        sum += (hexNum * (16 ** exp));
        exp++;
      } else {

        sum += (num * (16 ** exp));

        exp++;
      }
    }

  }

  return sum;
};

/******************************************************************************/

// console.log(convertToBase10('0b1100')); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914

// let org = Number('c')

// console.log(Number.isNaN(org));

module.exports = {
  convertToBase10,
  hexMappings
}
