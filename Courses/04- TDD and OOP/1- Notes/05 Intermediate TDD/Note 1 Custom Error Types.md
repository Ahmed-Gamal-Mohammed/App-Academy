Sometimes there is a built-in error that exactly works with the error you trying to detect.
However, sometimes none of built-in options are quite right. Many times this is because additional data would be useful for debugging error cases 

It is very easy in JavaScript - as in many other languages - to start from an existing class as a foundation (called a "parent" or "super" class) and inherit its features to a new class then extend those features to the functionality you want or need. Using **class inheritance** in this way saves time because you only need to write the code for the differences. Using unique errors for different situations makes your code easier to understand and debug when something doesn't go quite right.
## Why Use Custom Error Types?
1. **Specificity**: Custom error types allow you to distinguish between different kinds of errors in your code. For example, you might have a `MissingRequiredFieldError` for missing fields in a form and a `SearchSyntaxError` for errors in search queries.
    
2. **Debugging**: Custom errors can include additional information that helps in debugging. For instance, you might include the name of the missing field or the specific syntax error in the search query.
    
3. **Consistency**: By using custom error types, you can ensure that all errors of a certain type are handled consistently across your application.
    
4. **Readability**: Custom error types make your code more readable and self-documenting. When someone sees a `MissingRequiredFieldError`, they immediately know what kind of error it is.
## Walk-though
### How to Create Custom Error Types
To create a custom error type, you typically follow these steps:

1. **Extend the `Error` Class**: Use the `class` keyword to define a new class that extends the built-in `Error` class or another error class.
    
2. **Define the Constructor**: The constructor is where you initialize the custom error. You can pass in additional parameters to provide more context.
    
3. **Set the Error Name**: Set the `name` property to the name of your custom error class. This helps in identifying the type of error.
    
4. **Customize the Error Message**: You can customize the `message` property to include specific details about the error.
    
5. **Capture the Stack Trace**: Use `Error.captureStackTrace` to ensure that the stack trace is correctly captured, which is useful for debugging.

### Best Practices
1. **Use Descriptive Names**: Name your custom error classes descriptively so that it’s clear what kind of error they represent.
    
2. **Include Relevant Information**: Add properties to your custom error classes that provide context about the error, such as the missing field name or the invalid query.
    
3. **Maintain the Stack Trace**: Always ensure that the stack trace is correctly captured using `Error.captureStackTrace` (if available).
    
4. **Customize the Error Message**: Provide a clear and informative error message that includes any relevant details.
    
5. **Extend Appropriate Error Types**: If your custom error is related to a specific type of error (e.g., syntax, type), consider extending the appropriate built-in error class.
### Example 
```node.js
class SearchSyntaxError extends SyntaxError {
    constructor(...params) {
        // Pass all arguments to parent constructor
        super(...params);

        // Maintains proper stack trace for where error was thrown (available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SearchSyntaxError);
        }

        // The name property should match the class's name
        this.name = 'SearchSyntaxError';
    }
}
```
#### Key Features of This Custom Error Class

1. **Inheritance**:
    - The `SearchSyntaxError` class inherits from `SyntaxError`, so it has all the properties and methods of `SyntaxError` (e.g., `message`, `stack`).
2. **Custom Name**:
    - The `name` property is set to `'SearchSyntaxError'`, making it easy to identify this specific type of error.
3. **Stack Trace**:
    - The stack trace is properly captured, which helps in debugging by showing where the error was thrown.
4. **Flexibility**:
    - The use of `...params` allows the constructor to accept any number of arguments, making the class flexible for different use cases.
---
### Example Usage
```node.js
try {
    // Simulate a search syntax error
    throw new SearchSyntaxError('Invalid search query: "name: John"');
} catch (e) {
    console.error(e.name);    // Output: SearchSyntaxError
    console.error(e.message); // Output: Invalid search query: "name: John"
    console.error(e.stack);   // Output: Stack trace showing where the error was thrown
}
```
