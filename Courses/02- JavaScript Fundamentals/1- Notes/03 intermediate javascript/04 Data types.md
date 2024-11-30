# The typeof operator
Not all operators in JavaScript require two arguments like the `+` operator for addition, the `=` for assignment, and the `%` operator for modulo division. Those are all called _binary_ operators because they take two (bi-) operands, or things that are operated on.

JavaScript kindly gives you the operator `typeof` which acts on a single value. Operators that take only one operand are called _unary_ operators because "u only give them one value!" (That's a joke. "uni-" or "una-" is one.)

ed _unary_ operators because "u only give them one value!" (That's a joke. "uni-" or "una-" is one.)

```
let s = 'This is a string';
console.log(typeof s);    // 'string'

let n = 6.28;
console.log(typeof n);    // 'number'

let sum = function (a, b) {
  return a + b;
}
console.log(typeof sum);  // 'function'
```

**Note that the value returned from the `typeof` operator is a String data type. So, if you want to check if a value is a number, you could do this.**
```
if (typeof n === 'number') {
  // It is a number. Do some maths!
} else {
  console.log('I really wanted a number. :-(');
}
```

## How to tell if a value is an array
Unfortunately, due to a _really old bug_ in the way that JavaScript works, a bug that no one can fix because people wrote code that relies on the bug for decades, you cannot use the `typeof` operator to figure out if something is an array.
```
let a = [1, 2, 3];
console.log(typeof a);  // 'object'
```

Luckily, it only took 12 years for JavaScript to include a way to test if a value is an array. To do so, you use the `Array.isArray` method like this.
```
let a = [1, 2, 3];
Array.isArray(a);  // true

let n = 6.28;
Array.isArray(n);  // false

let f = function () {}
Array.isArray(f);  // false
```

---
# Null And Undefined Types
You've met Numbers, Strings, Boolean, and Arrays. There's another type often used in JavaScript: **the Null type**. And, it's a special type.

The Null type has one and exactly one value.`null`

## The meaning of null
1-  **The value `null` means _the absence of a value_ or _no value_**
2- **The value `null` means _an unknown value_**
3- **The value `null` is a nuisance and I hate it and wish it were never invented**

---

# Mutability
## What is mutability?
At its face value, _mutability_ is a simple concept. You may be familiar with the word _mutation_, which refers to a alteration (usually in DNA). Something that is _mutable_ can be changed, while something that is _immutable_ is unchanging and permanent. To illustrate this concept, we'll begin with strings and arrays. We've spent some time with these two data types and by now we recognize that the two types share many similarities. Both have indices, `length`, and even share common methods like `slice`. However, they differ greatly in their mutability:
```
let myArr = ["b", "e", "a", "m"];
myArr[0] = "s";
console.log(myArr); // 'seam'

let myStr = "beam";
myStr[0] = "s";
console.log(myStr); // 'beam'
```

Above we have shown that we can assign a new element to an index of an array, but we cannot assign a new character to an index of a string. In other words, arrays are _mutable_, but strings are _immutable_.

**An implication of this discovery is that there are _some_ array methods that will modify an existing array but _zero_ methods that will modify an existing string. Methods that manipulate string data typically return a _new_ string and never modify an existing one. A prime example is `toUpperCase`:**
```
let word = "piñata";
let newWord = word.toUpperCase();
console.log(word); // 'piñata'
console.log(newWord); // 'PIÑATA'
```

Above, notice that the `toUpperCase` method returns a capitalized version of the string, but does not change the original string. It's also worth noting that not every array method will mutate. For example, the `slice` method does not mutate for both strings and arrays. As we learn about methods in the future, we'll be certain to note what mutates and what does not.

## Mutable or immutable, that is the question

Now that we have a grasp of _mutability_, let's take inventory and identify JavaScript's data types as mutable or immutable.

**Mutable**

- array
- object (we'll learn these soon)

**Immutable**

- number
- string
- boolean

A quick way to remember the above list is to identify that the composite types (the types that can contain multiple values) of array and object are mutable. The remaining "simpler" types of number, string, and boolean are immutable.

---
# Built-in Functions
- `toLowerCase()` ==> for convert the string into lowercase
- `toUpperCase` ==> for convert the string into uppercase
- `reverse` ==> for reversing the **array** just array
- `push` ==> push a new element at the end of the array
- `pop()` ==> remove the last element of the array 
- `.shift()`==> remove the first element of the array 
- `.unshift` ==> its for add one on more one elements at the front of the array and return the new length of the array
- `endsWith()` ==> check if the array ends with the value passed between the two braces
- `Array.splice()` ==> 
	- ## What can Array.prototype.splice do?
		- the first thing to be aware of is that the method will **mutate** the array that it is called on. That is, `Array.splice` will modify the existing array and _not_ return a new array.
	- ### Using splice to remove
		- The usage of the `Array.splice` method is easy to mix up because it can be used to remove or insert elements into an array. That's right - it can perform "opposite" operations, even at the same time! For now, we'll begin by _only_ removing elements from an array:
		
		 `let colors = ["red", "yellow", "blue", "green", "orange",    "brown", "gray"];`
		 `let returnVal = colors.splice(2, 3);
		 `console.log(colors); // [ 'red', 'yellow', 'brown', 'gray' ]
		 `console.log(returnVal); // [ 'blue', 'green', 'orange' ]
		 
		 The first two arguments for splice correspond to 1) the target index and 2) how many elements to remove. The call `colors.splice(2, 3)`, will remove the next three elements beginning at index 2. This means that the elements at indices 2, 3, and 4 are removed.
	- ### Using splice to insert
		- To use the splice method to insert new elements into an array, we can pass in any number of additional arguments representing the values to insert:
		```
		let colors = ["red", "yellow", "blue"];
		let returnVal = colors.splice(1, 0, "RebeccaPurple",     "CornflowerBlue");
		let returnVal = colors.splice(1, 0, "RebeccaPurple", "CornflowerBlue");
		console.log(returnVal); // []
       ```
       The method call `colors.splice(1, 0, 'RebeccaPurple', 'CornflowerBlue')` translates to "target index 1, remove the next 0 elements, then insert `'RebeccaPurple'` and `'CornflowerBlue'`."
	- ### Using splice like a pro
		- Naturally, we can combine these two functionalities! Say we wanted to target index 2, remove the next 3 elements, then insert `'Gainsboro'`, `'Ivory'`, and `'Khaki'`:
	 ```
	 let colors = ["red", "yellow", "blue", "green", "black", "beige"];
	 let removed = colors.splice(2, 3, "Gainsboro", "Ivory", "Khaki");
	 console.log(colors); // [ 'red', 'yellow', 'Gainsboro', 'Ivory', 'Khaki', 'beige' ]
	 console.log(removed); // [ 'blue', 'green', 'black' ]
	 ```
-  `String.split(" ")`==> The [string.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method is called on a string and accepts a "separator" string as an argument. The method will return an array where the elements are the resulting sub strings when we cut at the "separators":
	 ```
	let sentence = "follow the yellow brick road";	 
	let words = sentence.split(" ");
	console.log(words); // [ 'follow', 'the', 'yellow', 'brick',  'road' ]
	console.log(sentence); // 'follow the yellow brick road'
	 ```
	 Note that the original string is _not mutated_, rather a new array is returned. A common pattern is to split a sentence string on a space (' '), but you can split on any separator as you see fit:
	 
	 `let sentence = "follow the yellow brick road";`
	 `console.log(sentence.split(" ")); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]`
	 `console.log(sentence.split("the")); // [ 'follow ', ' yellow brick road' ]`
	 `console.log(sentence.split("o")); // [ 'f', 'll', 'w the yell', 'w brick r', 'ad' ]`
	 
	 A pattern you may find useful is that when you split on a separator string, it is guaranteed that that separator will not be in the resulting array, effectively removing it. See the example of `sentence.split('the')` above. This may come in handy, so keep it in mind!
- `Array.join` The [array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method is called on an array and accepts a "separator" string as an argument. The method will return a string where elements of the array are concatenated together with the "separator" between each element:
```
let words = ["run", "around", "the", "block"];
let sentence = words.join(" ");
console.log(sentence); // 'run around the block'
console.log(words); // [ 'run', 'around', 'the', 'block' ]

console.log(words.join("_")); // 'run_around_the_block'
console.log(words.join("HI")); // 'runHIaroundHItheHIblock'
```
`array.join` does not mutate the original array, instead it will return a new string.

## A clever combination

It's pretty evident that `string.split` and `array.join` are "opposite" methods. That is:

- we use split to turn a string into a array
- we use join to turn an array into a string

By combining these two methods we can accomplish some cool behavior:
```
let str = "I don't know what I want to eat";
let newStr = str.split("I").join("we");
console.log(newStr); // 'we don't know what we want to eat'
```

Whoa! We were able to replace every substring "I" with the substring "we". We know that the line `str.split('I').join('we')` evaluates from left to right. This means that the `split` will cut the string wherever there is an 'I', leaving a gap where the 'I's were. Then, the `join` will fill those gaps with 'we's.

