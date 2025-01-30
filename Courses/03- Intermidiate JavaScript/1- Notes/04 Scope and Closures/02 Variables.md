# The different ways to declare variables 
1. **Let**: any variables declare with the keyword **let** allows you to reassign that variable. Variable declared using a **let** is scoped within a **block** => only accessible **inside the block `{}`** where it is declared.

2. **const**: any variables declared with the keyword **const** will not allow you to reassign that variable. Variable declared using **const** is scoped within a **block** => only accessible **inside the block `{}`** where it is declared.

3. **Var**: a Var declared variable may or may not be reassigned, and the variable is **scoped to a function** ==> which means it is accessible outside of blocks **but not outside functions**.

# Hoisting and scoping with variables 
Hoisting means that **variable and function declarations** are moved ("hoisted") to the **top of their scope** before the code is executed. However, only the **declaration** is hoisted—not the initialization.

Think of it as JavaScript **reading the entire script first**, registering variable and function **declarations**, and then executing the code
## **Scoping and Hoisting with `var`, `let`, and `const`**

JavaScript has **three ways** to declare variables:

1. `var` → **Function-scoped**
2. `let` and `const` → **Block-scoped**

Let's break it down with examples.

---

### **1. `var` is Function-Scoped and Hoisted**
```
console.log(x); // ✅ undefined (hoisted, but not initialized)
var x = 10;
console.log(x); // ✅ 10
```
**What happens?**
- JavaScript **hoists** `var x` to the top but does **not initialize** it.
- At the top, JavaScript treats the code like this:
```
var x;  // Hoisted declaration (but not assigned)
console.log(x); // undefined
x = 10; // Assigned later
console.log(x); // 10
```

✅ **Key takeaway:**
- `var` is hoisted and given a default value of `undefined` before execution.
- **Function-scoped**: It is accessible anywhere within the function it is declared in.
### **2.`let` and `const` are Block-Scoped and Hoisted**
```
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // ✅ 20
```

**What happens?**
- JavaScript **hoists** `let y` **but does not initialize it**.
- Unlike `var`, **no default value (`undefined`) is assigned**.
- Instead, it remains in a **"Temporal Dead Zone" (TDZ)** until the line where it is defined.
✅ **Key takeaway:**
- `let` and `const` **are hoisted**, but they are **not initialized**.
- They remain **inaccessible** before their declaration.
- **Block-scoped**: Only accessible inside `{}` where declared.
---
### **3. `const` Works Like `let` But Requires Initialization**
```
console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // ✅ 30
```

**What happens?**
- `const` follows the same **hoisting behavior as `let`**.
- However, `const` **must** be initialized at the time of declaration.

✅ **Key takeaway:**
- `const` is **hoisted but not initialized**.
- It stays **in the Temporal Dead Zone (TDZ)** until declared.
- **Must be assigned a value at the time of declaration**.

### 4. **Function Hoisting**
Function **declarations** are also hoisted **completely**, meaning they can be called before they appear in the code.
```
sayHello(); // ✅ "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```
**What happens?**

- The entire function is hoisted **with its body** to the top.
- So, we can call `sayHello()` before it appears in the script.

However, **function expressions** are not hoisted the same way:
```
greet(); // ❌ TypeError: greet is not a function

var greet = function() {
  console.log("Hi!");
};
```
- The variable `greet` is **hoisted** (`var greet`), but **the function itself is not assigned** yet.
- So `greet` is `undefined` at the time of execution.

### **Final Summary**

| Declaration          | Hoisted?                          | Initialized? | Scope             |
| -------------------- | --------------------------------- | ------------ | ----------------- |
| `var`                | ✅ Yes                             | ✅ Undefined  | Function scope    |
| `let`                | ✅ Yes                             | ❌ No (TDZ)   | Block scope       |
| `const`              | ✅ Yes                             | ❌ No (TDZ)   | Block scope       |
| Function Declaration | ✅ Yes (whole function)            | ✅ Yes        | Function scope    |
| Function Expression  | ✅ Only variable (`var/let/const`) | ❌ No         | Function or block |

### **Why is This Important?**
- **Avoid using `var`** because it can cause unexpected behaviors due to hoisting.
- **Use `let` and `const`** to avoid issues with hoisting and scoping.
- **Understand function hoisting** to avoid calling function expressions before assignment.
- **Beware of the Temporal Dead Zone (TDZ)** for `let` and `const`, which prevents accessing variables before their declaration.
### Const 
We cannot reassign a constant, but constants that are assigned to Reference types are **mutable**. The name binding of a constant is immutable. For example, if we set a constant equal to an Reference type like an object, we can still modify that object:
```
const animals = {};
animals.big = "beluga whale"; // This works!
animals.small = "capybara"; // This works!

animals = { big: "beluga whale" }; // Will error because of the reassignment
```

Constants cannot be reassigned but, just like with `let`, new constants of the same names can be declared within nested scopes.

Take a look at the following for an example:
```
const favFood = "cheeseboard pizza";
console.log(favFood);

if (true) {
  // This works! Declaration is scoped to the `if` block
  const favFood = "noodles";
  console.log(favFood); // Prints "noodles"
}

console.log(favFood); // Prints 'cheeseboard pizza'
```

Just like with `let` when you use `const` twice in the same block JavaScript will raise a `SyntaxError`.
```
if (true) {
  const test = "this works!";
  const test = "nope!"; // SyntaxError: Identifier 'test' has already been declared
}
```
