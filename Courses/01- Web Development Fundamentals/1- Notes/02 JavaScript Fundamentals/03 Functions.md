- Function declaration
	A **function declaration** is when a function is defined and saved so that we can use it _or re-use it_ later.
- A **function definition** 
	consists of the `function` keyword, followed by three things:
	1. The **name** of the function.
	2. A list of **parameters** to the function, enclosed in parentheses (`( )`).
	3. The **code to be run** when this function is run, enclosed in curly braces (`{ }`).
- Every function in JavaScript returns `undefined` unless a `return` is specified
- **Extra arguments**
	In JavaScript a function will not throw an error if the number of _arguments_ passed during a function invocation is different than the number of parameters listed during function declaration. This is very important to know!
		```
		Let's use the above function to demonstrate:
	
		function add(firstParameter, secondParameter) {
		console.log(firstParameter + secondParameter);
		}
	
		// this will ignore the 17 & 14
			// the first two arguments passed in will be assigned to the first two             parameters
		add(1, 2, 17, 14); //=> 3
- **Not enough arguments**
	Now what happens if we pass in less arguments then needed?
	function add(firstParameter, secondParameter) {
	  console.log(firstParameter + secondParameter);
	}
 	add(5); //=> NaN
- 
