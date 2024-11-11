**Array**
====
- The array can contain data from different type in JavaScript
	- ```let numbersAndLetters = ["b", "z", 17, "cat"];```
	
- if you try to access an element at an index that is not inside the array, you get back `undefined`
	- ```console.log(["a", "b", "c"][3]); // => undefined```
- Array can contain data even if this data is another array
	- ```let wackyArray = [2, 17, "apple", "cat", ["apple"]];```
- You can also calculate the index of a given value within an array by using `indexOf`:
		```console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // => 1```
- ## Concatenation with arrays
	- If you try to use the `+` on an array it will try to help you out by _converting your arrays into strings_.
	- ```console.log([1, 2, 3] + [4, 5, 6]); // => 1,2,34,5,6```
	- The result, "1,2,34,5,6", is actually a string.
	- ===================================================
	- JavaScript was just trying to help! However that is probably not what you meant to do. Good thing JavaScript has a separate method for putting two arrays together. To concatenate arrays, you can use the aptly named `.concat` method:
	```console.log([1, 2, 3].concat([4, 5, 6])); // => [1, 2, 3, 4, 5, 6]```
```
let array1 = ["Ahmed", "Gamal"];
let array2 = ["Mohamed", "Ali"];
let array3 = array1.concat(array2); ["Ahmed", "Gamal", "Mohamed", "Ali"]
console.log(array3[0]); // Ahmed
console.log(array3[1]); // Gamal
console.log(array3[2]); // Mohamed
console.log(array3[3]); // Ali
```

- *Array* in JavaScript is like to *Vector* in c++
	- Arrays also support ways to let you add and remove items from it. `Array.push(item)` allows you to add items to the back of an array, and `Array.pop()` removes the last item from the array. For example:
		```
		let arr = [1, 2, 3];
		arr.push(4);
		arr.push(5);
		console.log(arr);   // => [1, 2, 3, 4, 5]
		arr.pop();
		console.log(arr);   // => [1, 2, 3, 4]
		```
- 