/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // Define a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    // Use a set to store unique vowels found in the string
    const foundVowels = new Set();

    // Iterate through each character in the string
    string.toLowerCase().split('').forEach(function(char) {
      // If the character is a vowel, add it to the foundVowels set
      if (vowels.has(char)) {
        foundVowels.add(char);
      }
    });

    // Return true if at least three unique vowels were found
    return foundVowels.size >= 3;
  };

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
