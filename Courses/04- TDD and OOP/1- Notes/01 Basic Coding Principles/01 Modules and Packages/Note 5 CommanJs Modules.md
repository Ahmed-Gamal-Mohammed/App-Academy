Up until now, you've used **Node** to run a single JavaScript file that contains all of your code. For tiny applications, this approach works fine, but for most applications, a different approach is required.

Instead of a single, monolithic JavaScript file that contains all of your application code, you should organize your code into multiple files, with each file containing a logical unit of code that works together.

**This article only covers using modules in Node.js.** Later on, you'll learn how to use modules with JavaScript that runs in the browser.
# Node.js modules
In Node.js **each JavaScript file defines a module**

Modules defined within your project are known as `local modules`.
each local modules has a single purpose that's focused on implementing a single bit of functionality 
# Exporting multiple items from a module 
To make variables and functions defined in a module(file) accessible to other modules(files) in you application, you need to export them 

Each module in Node has access to a `module` object that represents the current module.
The `module` object contains a number of properties that provide information about the current module. One of those properties, The `module.exoprt` property, is used to export items from the module 

## Option A: Assigning an object to the `module.export` property
Assign a new object to the `module.exports` property. The new object should have **a property for each item that you want to export**

For example, The following **calculator.js** file has functions defined inside the file like `add` , `subtract`, `multiply`, etc. it also has an `opertations` variable assigned to an array, Only the `add`, `subtract`function, and `operation` array are to be exported from the **calculator.js** file to be used by other files 

To do this, set the `module.exports` property to a new object with the `add`, `subtract`function, and `operation` array ,  

```node.js
const operations = ['+', '-', '*'];

function add(num1, num2){
	// ...
}

function subtract(num1, num2){
	// ...
}

function mutliply(num1, num2){
	// ...
}

module.export = {
add,
subtract,
operations
};

// the above is shorthand for below
module.export = {
add: add,
subtract: subtract,
operations: operations
};
```
**`multiply` is not included in the exports and will not be accessible**

## Option B: Set properties on the `module.exports` object
This option has the same outcome of Option A. The decision to use Option A or Option B is a stylistic choice. Choose one to use, but make sure you can recognize and use both.

To export an item as a property on `module.exports`, you can assign a `property` directly on the `module.exports` property.

Exporting an item is to define a property for that item on the `module.exports` object.

Using the `calculator.js` example from before, `add`, `subtract`, and `operations` are added as properties onto the existing `module.exports` object instead of setting `module.exports` to a new object:

```node.js
// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

// set the add, subtract, and operations properties on the module.exports object
module.exports.add = add;
module.exports.subtract = subtract;
module.exports.operations = operations;
```

Node initializes the `module.exports` property to an empty object. If you don't declare and initialize any properties on the `module.exports` object, then nothing will be exported from the module.
	 **When a module (`.js` file) is created, **Node.js automatically creates an empty object** `{}` for `module.exports`
	- This means that **by default, a module doesn’t export anything** unless you explicitly add properties to `module.exports`
	- If you don’t add anything to `module.exports`, other files **won’t be able to access functions or variables** from that module.

The `module.exports` property names don't need to match the item names. However, it makes sense to keep the property names consistent with the item names so they are easier to remember and find later if you need to update them.
	You can assign **any name** to properties in `module.exports`, but **keeping the names consistent is recommended** for clarity.

## Option C: The `exports` shortcut
Occasionally, you will see `exports` without the `module.` in front of it. That's because Node provides an `exports` variable that's initialized to the `module.exports` property value. You can use the `exports` variable as a shortcut.

Using the `calculator.js` example from before, `add`, `subtract`, `operations` are added as properties onto the given `exports` object:
```node.js
// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

// set the add, subtract, and operations properties on the exports object
exports.add = add;
exports.subtract = subtract;
exports.operations = operations;
```

## Exporting a single item from a module
To export a single item from a module, there is only one way to do that, which is to assign `module.exports` to the single item you want to export.

Using the `calculator.js` example, to export the `operations` array as the 
ONLY item to export from the file:

```node.js
// calculator.js

const operations = ['+', '-', '*'];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

// set module.exports to the operations function instead of an object
module.exports = operations;
```

No other items can be exported from this file if you export `operations` this way.


# Importing using `require`
When a module needs something from another module, it is said to be **dependent** on that module. A module's dependencies are the other modules that are required for it to run properly.

Another way to think of a dependency is as a **requirement**.

The built-in `require` function allows you to import item(s) from a module. The `require` function takes in a relative path from the module in which `require` is being called, to the module you wish to import.

 Notice how the file extension, `.js`, is dropped in the file path. It's not necessary to add the file extension if the extension is `.js`.

## Importing multiple items from a module
To use the multiple items exported from a module in other modules, you must know how the items are being exported from the desired module.

Multiple items are exported from a module as properties of the exported object. You can import the object and access the properties of the object to get the desired items.

In the `calculator.js` example, `add`, `subtract`, and `operations` were properties of a single object that is exported from the module. To import the object into another module in the same folder, you can extract the properties from the object exported like so:

```node.js
const calculator = require('./calculator');
const add = calculator.add;
const subtract = calculator.subtract;
const operations = calculator.operations;
```
You can also use object destructuring to extract the properties of the object.
```node.js
const { add, subtract, operations } = require('./calculator');
```
Now you can use the `add`, `subtract`, and `operations` properties exported from the `calculator.js` module in this module!

## Importing an item from a module with a single export
To import a single item from a module that only has one item exported, you can simply use the `require` function without any object destructuring. The return of the `require` function will be the single item that was exported.

For example, in the `calculator.js` example when `operations` is exported as the only item from the module, you can import and use `operations` like so:
```node.js
// calculator.js
// ...
module.exports = operations;
```

```node.js
// module that is importing
const operations = require('./calculator');
```
For both importing multiple items or importing a single item export, you need to know what is exported from the required module. Once you know that and the relative path from the importing module to the exporting module, then you can break down your code into multiple files instead of being contained to one file.


