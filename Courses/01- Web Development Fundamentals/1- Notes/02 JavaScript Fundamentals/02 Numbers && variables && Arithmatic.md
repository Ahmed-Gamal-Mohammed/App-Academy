- `!(A || B)` is equivalent to `!A && !B`
- `!(A && B)` is equivalent to `!A || !B`

In other words, to correctly distribute `!` across parentheses, we must also flip the operation within parentheses. Beware that:

- `!(A || B)` is not equivalent to `!A || !B`
- `!(A && B)` is not equivalent to `!A && !B`

Once a variable is declared, it will contain `undefined` as its value. `undefined` is a common default value in JavaScript, and we'll see it come up in a few different places. You can think of `undefined` as showing that the variable is empty.

Now that we have the ability to perform arithmetic with variables, let's take a look at a common programming mistake, getting a result of `NaN` (not a number):

let num;
console.log(num + 3); // NaN (Not A Number)
console.log("fish" * 2); // NaN

The sixth string above is the empty string; it contains zero characters!

You are probably wondering why we are allowed to use either single or double quotes when denoting a string - why is this useful? Maybe we want a string that _contains_ quotation marks:

// valid strings
'Shakespeare wrote, "To be or not to be"';
"That's a great string";

// invalid string
'That's a bad string'

If we want to use a single quote as a character of a string, we simply need to enclose the string in double quotes, and vice versa.
console.log("bootcamp"[10]); // => undefined
console.log("bootcamp"[-3]); // => undefined
console.log("ramen".length); // => 5

### Using indexOf

We can also calculate the index of a given character within a string by using `indexOf`:

console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1
If we attempt to search for a character that is **not** present in a string, `indexOf` will return -1. This makes sense because we know that -1 is not a valid string index. The smallest index possible is 0!

If we search for a character that appears more than once in a string, `indexOf` will return the index of the first occurance of that character.

We can also use `indexOf` to search for a substring of characters. Under this circumstance, `indexOf` will return the index where the substring begins in the main string:

console.log("door hinge".indexOf("oor")); // => 1
console.log("door hinge".indexOf("hi")); // => 5
console.log("door hinge".indexOf("hint")); // => -1
