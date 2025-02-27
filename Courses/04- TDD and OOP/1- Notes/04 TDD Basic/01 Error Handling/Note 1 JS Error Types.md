## Types of JavaScript errors
There are seven core errors you'll encounter in JavaScript and each type of error will try to communicate why that error occurred:

1. `SyntaxError` - represents an error in the syntax of the code.
2. `ReferenceError` - represents an error thrown when an invalid reference is made.
3. `TypeError` - represents an error when a variable or parameter is not of a valid type.
4. `RangeError` - representing an error for when a numeric variable or parameter is outside of its valid range.
5. `InternalError` - represents an error in the internal JavaScript engine.
6. `EvalError` - represents an error with the global `eval` function.
7. `URIError` - represents an error that occurs when `encodeURI()` or `decodeURI()` are passed invalid parameters.

For this reading we'll be going in depth of the three most common errors you have encountered so far: `SyntaxError`, `ReferenceError`, and `TypeError`.
### SyntaxError
A SyntaxError is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language. When learning the JavaScript language this error is a constant companion for any missing `}` or misspelled `function` keywords.

### ReferenceError
The `ReferenceError` object represents an error when a non-existent variable is referenced." This is the error that you'll encounter when attempting to reference a variable that does not exist (either within your current scope or at all).

### TypeError
A `TypeError` is commonly thrown for a couple of reasons:
1. When an operation cannot be performed because the operand is a value of the wrong type.
2. When you are attempting to modify a value that cannot be changed.
