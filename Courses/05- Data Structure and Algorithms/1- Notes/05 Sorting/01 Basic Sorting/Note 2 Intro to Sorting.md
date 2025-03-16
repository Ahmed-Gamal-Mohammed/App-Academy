Sorting does not have one single elegant algorithm. Instead, there are a large number of clever algorithms, each with its strengths and weaknesses. One classic example is the divide-and-conquer approach. In this portion of your computer science journey, you will be learning many clever solutions to the sorting problem.

- Bubble sort
- Insertion sort
- Selection sort
- Merge sort
- Quick sort
## Doesn't JavaScript have a built in `sort` function? Why do I need to know this stuff?
Almost every coding problem, both in technical interviews and on the job, come down to data manipulation. Some variation of read data from a data structure, process the data, move it around, then report to the user. Sorting algorithms will teach you clever techniques for moving data around in a logical fashion.

**These techniques include: in-place array swaps, sliding windows, divide-and-conquer, and more.**

Study these techniques well, specially if you struggle to come up with coding plans (step 2 of Polya's problem solving framework). For any coding problem, there are always multiple ways to solve it.

If you struggle to execute your technical plans (step 3 of Polya), working through these algorithms will improve your coding fluency. Like any new language, it takes practice and repetition to build fluency. You will be given the plans for each sorting algorithm so you can practice step 3 in isolation.

Finally evaluating the performance tradeoffs of each of these algorithms will help you determine which solution is truly optimal for your use case. In doing so, you may discover that determining the optimal solution actually requires a more nuanced understanding of the problem itself (steps 1 & 4 of Polya).

## How should I approach these sorting problems?
For each problem, you will be given the sorting algorithm described in code comments, along with an example of the algorithm in action. Your task is to understand the algorithm and translate from the plan to working JavaScript code.

**DO NOT LOOK UP SOLUTIONS ONLINE**

**You won't learn anything from looking up solutions. If you are stuck, talk it out with a peer and come up with a clear, concise question to ask your instructor. During interviews and on the job, you will be tested on your ability to problem solve, not to recite algorithms from memory.**

## Review: swaps and shifts
In the following algorithms, you will be making use of array swaps and shifts.
### Swapping 
You can swap two values in an array using a temporary variable, or [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
```node.js
const arr = [0, 1, 2, 3, 4, 5, 6];

// Swap two values with a temporary variable
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

console.log(arr); // [0, 2, 1, 3, 4, 5, 6]

// Swap two values with destructured array assignment
[arr[4],arr[6]] = [arr[6] , arr[4]];

console.log(arr); // [0, 2, 1, 3, 6, 5, 4]
```

### Shifting
Think to the shifting in _dynamic arrays_ and remember that when shifting to the right, you must shift back to front to avoid overwriting your values.
```node.js
const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];

// If you want to shift the array to the right by 1...

// Shifting from front to back will overwrite all values
for (let i = 1 ; i < arr1.length ; i++) {
    arr1[i] = arr1[i-1];
}

console.log(arr1); // [ 0, 0, 0, 0, 0, 0 ]

// Instead, start from the back and shift backwards
for (let i = arr2.length - 1 ; i > 0 ; i--) {
    arr2[i] = arr2[i-1];
}

console.log(arr2); // [ 0, 0, 1, 2, 3, 4 ]
```


