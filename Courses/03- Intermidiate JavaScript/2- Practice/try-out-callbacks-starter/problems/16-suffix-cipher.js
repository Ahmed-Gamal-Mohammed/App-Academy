/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, suffixCallbacks) {
    // Split the sentence into words
    let words = sentence.split(" ");

    // Process each word in the sentence
    let transformedWords = words.map(word => {
        // Check each suffix in the suffixCallbacks object
        for (let suffix in suffixCallbacks) {
            // If the word ends with the suffix
            if (word.endsWith(suffix)) {
                // Apply the corresponding callback and return the transformed word
                return suffixCallbacks[suffix](word);
            }
        }
        // If no suffix matches, return the word unmodified
        return word;
    });

    // Join the transformed words into a new sentence
    return transformedWords.join(" ");
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
