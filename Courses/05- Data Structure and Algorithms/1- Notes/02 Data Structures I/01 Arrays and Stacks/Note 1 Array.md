# . **Common Integer Sizes**

- **1 byte (8 bits):** Can store integers from `-128` to `127` (signed) or `0` to `255` (unsigned).
    
- **2 bytes (16 bits):** Can store integers from `-32,768` to `32,767` (signed) or `0` to `65,535` (unsigned).
    
- **4 bytes (32 bits):** Can store integers from `-2,147,483,648` to `2,147,483,647` (signed) or `0` to `4,294,967,295` (unsigned).
    
- **8 bytes (64 bits):** Can store integers from `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807` (signed) or `0` to `18,446,744,073,709,551,615` (unsigned).
# Intro to Array 
Arrays are the **most time and space efficient** way to store data and should be thoroughly understood. In this reading
## What is an Array ?
An array is a sequence of elements of the same type stored in a contiguous block of memory 
## Array representation in memory
Say you create an array containing four 32-but integers 
```node.js
arr = [255,256,43690,14316555765]
```
How is this represented in memory?

**32- bit tells us that each of the integers, large or small, requires four bytes of storage space**
`255` takes up the same amount of spaces as  `14316555765`, Therefore, you know that storing these four integers would require 16 byte of memory, An array containing `[0,0,0,0]` would require 16 bytes too 

When this line of code runs, it requests 16 bytes of memory from the operating system. If the OS approves the request, it returns a memory address and read/write access to the 16 bytes starting from that address.

```
104      105      106      107
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000
```
In this diagram, the numbers are the memory address (starting from the 104th byte of memory) and the 0s are the bits in each memory cell. Here, the memory is given as all zeroes but you might actually receive memory with values leftover from the previous occupants. This is fine since you will be overwriting those values anyway.

Since memory is a binary sequence, the values must be translated from base-10 to base-2 before they can be stored.
```
255 ---> 00000000 00000000 00000000 11111111
256 ---> 00000000 00000000 00000001 00000000
43690 ---> 00000000 00000000 10101010 10101010
1431655765 ---> 01010101 01010101 01010101 01010101
```
Notice that all 32 bits are represented, even for smaller numbers.

After translation, the values can finally be written into the memory allocated to the array.
```
104      105      106      107
00000000 00000000 00000000 11111111

108      109      110      111
00000000 00000000 00000001 00000000

112      113      114      115
00000000 00000000 10101010 10101010

116      117      118      119
01010101 01010101 01010101 01010101
```
Recall this definition of an array:
**An array is a sequence of elements of the same type stored in a contiguous block of memory.**

From this diagram and definition, you can see that arrays are an **optimally space-efficient** way to store data, packed side-to-side with no wasted memory.
## Array indexing
Not only are arrays the most space efficient method of data storage, they also allow the **fastest** method of access via indexing.
```
arr = [255, 256, 43690, 1431655765]
```
Say you want to access the third item in this array. You know that indexing starts counting from 0, so you call `arr[2]` which returns `43690`. How does this work underneath the hood?

When you access an array value at an index, the code runs this equation:

> valueAddress = startAddress + index * sizeof(dataType)

In our example, the array starts at memory address `104`, the index is `2` and the size of the data is 32-bits, or `4` bytes. Plugging this into the equation places the value at `104 + 2 * 4`, or memory address `112`. Examining the memory diagram confirms that the four bytes starting from address `112` are `00000000 00000000 10101010 10101010`, which is `43690` in base-10.

Note that this indexing equation takes the same amount of operations regardless of the array size: one multiplication, one addition, and memory access. All are extremely fast and run in constant time. This is why array indexing is an **O(1)** operation, and the fastest way to access data in a collection. Incidentally, this is also why array indices start from 0 instead of 1.

Think back to the array definition:
> An array is a sequence of elements of the same type stored in a contiguous block of memory.

All three parts of this definition are required for the O(1) indexing equation. Since indices are found by the offset, the entire array must occupy a contiguous block of memory. Since the offset is calculated by multiplying the data size, all items in the array must be of the same data type. Since the indices are numerical, the array must be stored in an ordered sequence.

## Arrays in different programming languages
By now, you might have noticed some contradictions between this array defintion and the JavaScript arrays you are familiar with. After all, JavaScript allows you to store multiple data types in a single array, like `[1, 2.0, "3", true, undefined]`. Are JavaScript arrays different from the arrays described in this reading?

Well, yes and no. Every programming language has its own unique array implementation which builds on top of this basic functionality. The way JavaScript and other dynamically-typed languages like Python and Ruby achieve mixed array types is because each value is stored as a generic data object whose type and value is interpreted at runtime. The array itself actually contains a sequence of pointers (i.e. memory addresses) which all have the same data size. This allows more flexibility at the expense of some extra memory, which is used to store the pointers and object metadata.
	- **How this works under the hood**:
	    - In these languages, each value in the array is stored as a **generic data object**. This means that the array doesn't directly store the actual data (like the number 42 or the string "hello"). Instead, it stores a **pointer** (a memory address) to where the data is located in memory.
	    - Since all pointers are the same size (e.g., 8 bytes on a 64-bit system), the array can store a sequence of pointers, even if the actual data they point to are of different types and sizes.

JavaScript arrays are particularly wonky as they use yet another layer of abstraction: they are actually hash tables underneath the hood. You know these as key-value objects `{}` which you will learn about soon. In the meantime, it will benefit you to treat JavaScript arrays as if they are normal arrays in code.
## **The Flexibility of Arrays in Dynamically-Typed Languages**
In languages like JavaScript, Python, or Ruby, arrays can hold **any type of data**. For example, you can have an array that contains a number, a string, and an object all at once:
```
let mixedArray = [42, "hello", { key: "value" }];
```
This is very flexible because you don’t need to worry about declaring the types of the elements in advance. The array can grow and change dynamically, and you can mix and match different types of data.
### **How This Works Under the Hood**
To make this flexibility possible, the language does something clever behind the scenes:
1. **Arrays Store Pointers, Not the Actual Data**:
    - Instead of storing the actual values (like the number `42` or the string `"hello"`) directly in the array, the array stores **pointers** (memory addresses) to where those values are stored in memory.
    - For example:
        - The array might store a pointer to the memory location of the number `42`.
        - Another pointer to the memory location of the string `"hello"`.
        - And another pointer to the memory location of the object `{ key: "value" }`.
2. **All Pointers Are the Same Size**:
    - Pointers are just memory addresses, and all memory addresses are the same size (e.g., 8 bytes on a 64-bit system).
    - This means the array itself is just a sequence of equally sized pointers, which makes it easy to manage.
3. **Metadata About Each Object**:
    - Since the array only stores pointers, the actual data (like the number, string, or object) is stored elsewhere in memory.
    - Along with the actual data, the language also stores **metadata** (extra information) about each object. This metadata includes:
        - The **type** of the data (e.g., number, string, object).
        - The **size** of the data (how much memory it occupies).
        - Other details needed to manage the data (e.g., reference counts for garbage collection).
---
### **The Trade-Off: Extra Memory Usage**
While this approach is very flexible, it comes with a cost:
1. **Memory for Pointers**:
    - The array itself stores pointers, which take up extra memory. For example, if you have an array with 100 elements, you need memory to store 100 pointers.
2. **Memory for Metadata**:
    - Each object in memory (like the number `42` or the string `"hello"`) has additional metadata stored with it. This metadata takes up extra memory.
3. **Overhead**:
    - The combination of pointers and metadata means that dynamically-typed languages use more memory compared to statically-typed languages, where arrays store the actual data directly and don’t need as much metadata.
---
### **Why Is This Necessary?**
The extra memory usage is necessary because the language needs to:
- Keep track of the **type** of each value (since it can change dynamically).
- Manage memory efficiently (e.g., know when to free up memory for unused objects).
- Allow the flexibility of mixing different types in the same array.
# Dynamic Arrays
## Array resizing
Let's start with this previous array example: `arr = [255, 256, 43690, 1431655765]` and say we want to push another value to the end of the array using `arr.push(1)`. How does this work?

If you recall the previous memory example, the process was to request 16 bytes of memory from the operating system and fill in the four array values:
```
104      105      106      107
00000000 00000000 00000000 11111111

108      109      110      111
00000000 00000000 00000001 00000000

112      113      114      115
00000000 00000000 10101010 10101010

116      117      118      119
01010101 01010101 01010101 01010101
```
The OS has granted the program permission to read and write 16 bytes: 104-119. Trying to write the new value into the next four bytes of memory (120-123) will violate memory permissions and throw a segmentation fault error. You might be able to request access to those bytes of memory but unfortunately, there is no way to guarantee that they will be free. The OS might have assigned that memory to another function. Instead, the array needs to resize.

To do this, the program requests 20 new bytes of memory, copies the old values into the new slots, writes the new value into the last slot, then frees the old memory back to the OS, ready to be reassigned at a later time. So, the new memory would look something like this:
```
200      201      202      203
00000000 00000000 00000000 11111111

204      205      206      207
00000000 00000000 00000001 00000000

208      209      212      211
00000000 00000000 10101010 10101010

212      213      214      215
01010101 01010101 01010101 01010101

216      217      218      219
00000000 00000000 00000000 00000001
```
Each value must be copied from the old memory to the new allocation one at a time which makes resizing an **O(n)** operation, where _n_ is the length of the array. As you might imagine, if the array is very large, this is a fairly slow process.
## Overallocation to speed up resizing
Pushing to an array is very common and should be as efficient as possible. Turns out, it is possible to trade space (memory) for time (speed) by _overallocating_ memory when creating arrays.

In the previous example, the array grew from length 4 to 5 so the program requested a memory block that could fit 5 integers. The next time a value is pushed to the array, it would need to request 6 slots and copy each value to the new memory, then 7 for the next, and so on. Instead, when a resize occurs, the program will generally request more memory than is needed. Instead of 5, it will resize to 8.

Now with 8 slots, the array will look like this from the programmer's perspective:
```
[ 255, 256, 43690, 1431655765, 1 ]
```

but it will actually hold this in memory:
```
[ 255, 256, 43690, 1431655765, 1, <empty>, <empty>, <empty> ]
```
Now, pushing three more values is just a matter of writing over the empty slots, which is **O(1)**. Pushing a 9th value will require another resizing operation but now the program will request 16 slots and the next 7 pushes will all be **O(1)**.

Due to overallocation, the larger the array grows, the less frequently resizing occurs. Because of this, and since big-O only matters for large values of n, `push()` is considered an **O(1)** operation.
## Testing overallocation
It's possible to verify the cost of resizing using timing benchmarks. Consider these two functions:

```node.js
function addToBack(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.push(i+1);
    }
    return arr;
}

function addToFrontPreallocated(n) {
    // Preallocate n slots of memory in an array
    const arr = new Array(n);
    for (let i = 0 ; i < n ; i++) {
        arr[i] = i + 1;
    }
    return arr;
}
```
Both of these functions do the same thing: Given a number n, fill an array with integers 1 through n. `addToBack()` does this with `push()` while `addToFrontPreallocated()` preallocates the memory and fills it in using indexing. Let's compare the performance:

```node.js
n = 10000000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimePre = Date.now();
arr = addToFrontPreallocated(n);
endTimePre = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFrontPreallocated(" + n + ") = " + (endTimePre - startTimePre) + "ms");

// addToBack(10000000) = 292ms
// addToFrontPreallocated(10000000) = 82ms
```
The runtimes may vary on your computer but preallocating memory is consistently faster. Note that this for n = 10 million: For smaller values of n, the difference is hardly noticable.

## push()` vs `unshift()` vs `splice()`
You've seen that adding to the back of an array via `push()` is **O(1)**. How about adding to the front of an array using `unshift()`? Let's take the original array of `arr = [255, 256, 43690, 1431655765, 1]` and add a `0` to the front. Assume we have 8 blocks of allocated memory starting from byte 200 to 231.

Just like you cannot add to the end of an array without free memory, you also cannot occupy the previous memory block without permission. We have free space at the end of the array but that doesn't help you add to the front. First, you need to shift all of the array values to the right by 1, then add the new value to the front. `arr.unshift(0)` would look something like this underneath the hood:
```
[255, 256, 43690, 1431655765, 1, <empty>, <empty>, <empty>]    // Start

[255, 256, 43690, 1431655765, 1, 1, <empty>, <empty>]          // Shift 1

[255, 256, 43690, 1431655765, 1431655765, 1, <empty>, <empty>] // Shift 1431655765

[255, 256, 43690, 43690, 1431655765, 1, <empty>, <empty>]      // Shift 43690

[255, 256, 256, 43690, 1431655765, 1, <empty>, <empty>]        // Shift 256

[255, 255, 256, 43690, 1431655765, 1, <empty>, <empty>]        // Shift 255

[0, 255, 256, 43690, 1431655765, 1, <empty>, <empty>]          // Overwrite first element to 0
```

This requires 5 shifting steps for the array of length 5, or _n_ steps for an array of length n. Therefore, `unshift()` is an **O(n)** operation. **The same applies for `shift()`, which removes the first value and moves each other value to the left by one for `O(n)`**.

How about adding or removing values from the middle of an array using `splice()`? Splicing a value at the end is the same as `push()` and at the beginning is the same as `unshift()`. Splicing exactly in the middle requires shifting every element after the midpoint for _n/2_ steps. Since big-O ignores constant coefficients like 1/2, `splice()` is considered **O(n)** as well.
## Testing `push()` vs `unshift()`
According to this theoretical analysis, `push()` is **O(1)** and `unshift()` is **O(n)**. Let's verify this with another timing test.
```node.js
function addToBack(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.push(i+1);
    }
    return arr;
}

function addToFront(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.unshift(n - i);
    }
    return arr;
}
```
Both of these functions do the exact same thing: Filling an array with integers 1 through n. Take a moment to evaluate the time complexities of these functions.

Done? `addToBack()` calls the **O(1)** `push()` function inside a for-loop which makes the function **O(n)**. `addToFront()` calls the **O(n)** `unshift()` inside a for-loop, which makes it **O(n2)**. Take a moment and ask a question if you are not sure why this is.

Now run a test to see if the actual runtime matches your expectations.
```node.js
n = 50000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms");

// addToBack(50000) = 4ms
// addToFront(50000) = 194ms
```
For a mere n = 50k, `addToFront()` is almost 50x slower than `addToBack()`! Now try n = 100k.
```node.js
n = 100000;

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms");

console.log("addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms");

// addToBack(100000) = 5ms
// addToFront(100000) = 895ms
```
Doubling the input size, `addToBack()` hardly increased at all but `addToFront()` runtime increased by over 4x! This correlates with the expected n2 growth rate. Try this out yourself with different values of n.

