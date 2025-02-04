/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(array) {
  // Base case: If array has one element, return the array itself (one permutation)
  if (array.length === 1) {
    return [array];
  }

  let result = [];

  // Iterate over the array and fix each element in the first position
  for (let i = 0; i < array.length; i++) {
    // Remove the element at index i
    let remaining = array.slice(0, i).concat(array.slice(i + 1));

    // Recursively calculate permutations of the remaining elements
    let remainingPermutations = permutations(remaining);

    // Add the fixed element to the front of each of the permutations
    for (let perm of remainingPermutations) {
      result.push([array[i], ...perm]);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
