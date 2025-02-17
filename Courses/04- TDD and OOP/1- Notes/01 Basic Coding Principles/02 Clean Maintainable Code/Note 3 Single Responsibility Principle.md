
**Single-Responsibility Principle** is *Every Module, class or function in a computer program should have responsibility over a single part of that program's functionality*


To apply the **Single-Responsibility Principle (SRP)** in you current knowledge of JavaScript, Your JavaScript function should do one thing and do it well. If your function is doing too many things, You should refactor your code to create one or more helper functions that follow up SRP 

# Makes Code Easier to Change 
By following the Single-Responsibility Principle, debugging your code when a change is necessary will be simpler than not following SRP. Let's say another developer wants to make a small change to your function. If your function is doing too many things, then it will be hard to isolate the part that needs the change to be applied.

For example, suppose you have the following function for abbreviating words in a sentence. If a word in the sentence is longer than 3 characters, shorten it to be three characters without any vowels (i.e. "Hello World!" => "Hll Wrl").

```node.js
const VOWELS = 'aeiou';

const abbreviateWords = function(sentence) {
  const words = sentence.split(' ');

  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    if (word.length > 3) {
      let newWord = "";
      let charIdx = 0;

      while (charIdx < word.length && newWord.length < 3) {
        let char = word[charIdx];
        if (!VOWELS.includes(char)) {
          newWord += char;
        }
        charIdx++;
      }

      words[wordIdx] = newWord;
    }
  }

  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl
```
Why does this function look lengthy and hard to read? Because it is attempting to do too many things. The problem can be broken down into these steps:

1. Separate the sentence into words, change the words, then return it
2. For each word, change the word if the length of the word is greater than 3
3. If the length of the word is greater than 3, change the word to have a maximum length of 3 without any vowels

Each of these steps is doing different things and can be extracted into its own function. Here's an example of refactoring the `abbreviateWords(sentence)` function using SRP.
```node.js
const VOWELS = 'aeiou';

const changeWord = function(word) {
  let newWord = "";
  let charIdx = 0;

  while (charIdx < word.length && newWord.length < 3) {
    let char = word[charIdx];
    if (!VOWELS.includes(char)) {
      newWord += char;
    }
    charIdx++;
  }
  return newWord;
}

const abbreviateWord = function(word) {
  if (word.length > 3) {
    return changeWord(word);
  }
  return word;
}

const abbreviateWords = function(sentence) {
  const words = sentence.split(' ');

  for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
    const word = words[wordIdx];
    words.splice(wordIdx, 1, abbreviateWord(word));
  }

  return words.join(' ');
};

console.log(abbreviateWords("Hello World!")); // Hll Wrl
```
Now if you or another developer wanted to change the problem even just a little, like changing the word only if the word has more than 5 characters, or changing the word to only include vowels instead of excluding them, you can easily isolate and identify a single part of the code that needs to be changed.

The Single-Responsibility Principle is all about limiting the impact of changing your code. If you change your code and other code or programs depend on it, how big of an impact will it have? Will other code or programs have to change to match the change you make to your code?
