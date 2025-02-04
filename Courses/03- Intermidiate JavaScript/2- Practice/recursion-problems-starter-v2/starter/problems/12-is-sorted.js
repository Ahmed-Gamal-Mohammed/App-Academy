/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(arr) {
  if (arr.length <= 1) {
    return true; // Base case: an array with 1 or 0 elements is sorted
  }

  if (arr[0] > arr[1]) {
    return false; // If the first element is greater than the second, the array is not sorted
  }

  // Recursively check the rest of the array
  return isSorted(arr.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
