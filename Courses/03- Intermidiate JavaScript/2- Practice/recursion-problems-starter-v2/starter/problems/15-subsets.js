/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr) {
  // Base case: if the array is empty, return an array with the empty subset
  if (arr.length === 0) {
    return [[]];
  }

  // Recursive case: get all subsets of the rest of the array
  let smallerSubsets = subsets(arr.slice(1));

  // Create new subsets by adding the current element to each of the smaller subsets
  let subsetsWithCurrent = smallerSubsets.map(subset => [arr[0], ...subset]);

  // Return both the smaller subsets and the subsets with the current element
  return [...smallerSubsets, ...subsetsWithCurrent];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
