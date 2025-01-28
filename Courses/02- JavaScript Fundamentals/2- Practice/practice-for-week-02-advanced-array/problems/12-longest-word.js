/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');
    // Initialize a variable to store the longest word
    let longest = '';

    // Use forEach to iterate through each word
    words.forEach(function(word) {
      // If the current word is longer than the longest word found so far, update the longest word
      if (word.length > longest.length) {
        longest = word;
      }
    });

    // Return the longest word
    return longest;
  };
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
