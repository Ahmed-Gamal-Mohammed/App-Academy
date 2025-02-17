**DRY** or **Don't repeat yourself**: is *Principle of Software development aimed at reducing repetition of software patterns, Replacing it with abstractions or using data normalization to avoid redundancy*

Good programmers always want code to be clear, concise, and efficient. Violations of DRY are typically referred to as **WET** ("write everything twice") code. To refactor code to be DRY and not WET, start by identifying any patterns in your code that come up at least twice. If there is a pattern in your code, then your code is WET. DRY it up by extracting the pattern to its own function or set of code and use that function or set of code wherever the pattern was used.

One of the things that makes this concept a challenge is that it is abstract, ambiguous, and to some degree, a matter of opinion. There is no perfect test or rule that can confirm or deny the need to refactor code to make it DRYer. You have to make a judgment call based on your own knowledge and experience as applied to the broader view of the nature and goals of the code. The only way to get good at this is to do the best you can to practice, practice, practice.

For example, suppose you have the following function that solves the problem of returning figuring out if an array of numbers includes three consecutive elements that are consecutive numbers (i.e. `[5, 1, 2, 3, 6]` => `true`; `[5, 1, 2, 4, 6]` => `false`).

```node.js
const threeIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
      return true;
    }
  }
  return false
};

console.log(threeIncreasing([5, 1, 2, 3, 6])); // true
console.log(threeIncreasing([5, 1, 2, 4, 6])); // false
```

Can you see any patterns in this code that make this code WET?

There is one pattern that can be refactored to make it DRYer. The `if` statement checks if three numbers are consecutive. But, there are two conditionals in the `if` statement that look very similar. The right-side of the conditionals adds `1` to an element and checks if that sum equals another element.

Here's an example of how the pattern can be refactored to make it DRY.
```node.js
const isConsecutive = function(nums){
  const separatedBy = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
};

const threeIncreasing = function(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = i; j < i + 3; j++) {
      consecutiveNums.push(nums[j]);
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }
  return false;
};
```
Notice that the refactored code is actually lengthier than before the refactor. So is this code even better? And why go through all the effort to make it DRYer?


## Makes code easier to change
If there is a repeating pattern in WET code and you want to change any part of that pattern, you need to update it everywhere that the pattern is used. If the code is DRY and the pattern is extracted into its own code, it's easier to update or change the code to reflect any changes in the problem that it's solving.

Using the previous `threeConsecutive(nums)` example, suppose you want to change the problem so that the function returns true only if three consecutive elements in the array are consecutive numbers separated by `2` instead of `1`?

In the pre-refactored version of `threeConsecutive(nums)`, you would have to update the pattern twice.
```node.js
const threeIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 2 === nums[i + 1] && nums[i + 1] + 2 === nums[i + 2]) {
      return true;
    }
  }
  return false
};

console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
console.log(threeIncreasing([5, 1, 2, 4, 6])); // true
```

In the refactored version, not only do you have to only update the pattern once, identifying the area that needs the change is easier for other developers.
```node.js
const isConsecutive = function(nums){
  const separatedBy = 2;

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];

    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
};

const threeIncreasing = function(nums){
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = i; j < i + 3; j++) {
      consecutiveNums.push(nums[j]);
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }
  return false;
};

console.log(threeIncreasing([5, 1, 2, 3, 6])); // false
console.log(threeIncreasing([5, 1, 2, 4, 6])); // true
```
Suppose now you want to change the problem to check four consecutive elements in the number array instead of just three and see if they are consecutive numbers?

In the pre-refactored version of `threeConsecutive(nums)`, you would have to change the code to repeat the pattern three times instead of two. If this pattern needs updates for future changes, you would need to update it three times instead of two. Now, imagine repeating this pattern 100 times instead. It would be a nightmare to update all 100 occurrences of the pattern.

**NOTE:** A bug was introduced in the code when repeating the pattern. Can you spot it?

```node.ja
// Please help debug this code.  It's broken!
const fourIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 2 === nums[i + 1] && nums[i + 1] + 2 === nums[i + 2] && nums[i + 2] + 1 === nums[i + 3]) {
      return true;
    }
  }
  return false
};

console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false
```
Again in the refactored version, you only update the pattern once.
```node.js
const isConsecutive = function(nums) {
  const separatedBy = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = nums[i + 1];
    if (num1 + separatedBy !== num2) {
      return false;
    }
  }
  return true;
};

const fourIncreasing = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    const consecutiveNums = [];
    for (let j = 0; j < 4; j++) {
      consecutiveNums.push(nums[i + j]);
    }

    if (isConsecutive(consecutiveNums)) {
      return true;
    }
  }
  return false
};

console.log(fourIncreasing([5, 1, 2, 3, 4, 6])); // true
console.log(fourIncreasing([5, 1, 2, 4, 3, 6])); // false
```

The DRY principle may look like more work, but when it comes time to make a change, updating and debugging DRY code is a lot simpler. Refactor your code right after you get working code to make it DRY so that you or other developers will have an easier time maintaining it later.