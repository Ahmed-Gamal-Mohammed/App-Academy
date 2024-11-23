- A **function definition** consists of the `function` keyword, followed by three things:
	1. The **name** of the function.
	2. A list of **parameters** to the function, enclosed in parentheses, `()`.
	3. The **code to be run** when this function is run, enclosed in curly brackets,`{ }`.
	ex 
  ```
  function average(number1, number2) {
  return (number1 + number2) / 2;
  }
   ```

# Parameters and Arguments
## The difference between Parameters and Arguments
1. **Parameters** are comma separated variables specified as part of a function's declaration.
2. **Arguments** are values passed to the function when it is invoked.
```
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

// the add function declares two parameters
> add(1, 2); //=> 3
```

## Extra arguments
In JavaScript a function will not throw an error if the number of _arguments_ passed during a function invocation is different than the number of parameters listed during function declaration. This is very important to know!

```
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

// this will ignore the 17 & 14
// the first two arguments passed in will be assigned to the first two parameters
> add(1, 2, 17, 14); //=> 3
```
Notice in the above example we passed in 4 arguments (1, 2, 17, 14) to `add`. Since the function was only looking for two parameters that is all it uses.

## Not enough arguments
Now what happens if we pass in fewer arguments then needed?
```
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

> add(5); //=> NaN
```
