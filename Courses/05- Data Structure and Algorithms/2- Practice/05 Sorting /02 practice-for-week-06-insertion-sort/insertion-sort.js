// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  const array = [...arr]
  const sorted = []

  while (array.length > 0) {
    console.log(sorted.join(","))
    const lastElement = array.pop()
    if (sorted.length === 0) {
      sorted.push(lastElement)
    } else {
      let inserted = false
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (lastElement > sorted[i]) {
          sorted.splice(i + 1, 0, lastElement)
          inserted = true
          break;
        }
      }

      if (!inserted) {
        sorted.unshift(lastElement)
      }
    }
  }

  return sorted
}


// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  // for (let i = 1; i < arr.length; i++) {
  //   let key = arr[i];
  //   let j =  i -1;
  //   for (; j >= 0; j--) {
  //     if (arr[j] > key) {
  //       arr[j + 1] = arr[j];
  //     }else{
  //       break;
  //     }
  //   }
  //   arr[j + 1] = key;
  // }

  // return arr;


  let pointer = 0
  while (arr[pointer + 1]) {
    console.log(arr.join(','))
    if (arr[pointer] > arr[pointer + 1]) {
      const element = arr.splice(pointer + 1, 1)[0]
      let sorted = false
      for (let i = 0; i <= pointer; i++) {
        if (element < arr[i]) {
          arr.splice(i, 0, element)
          pointer++
          sorted = true
          break
        }
      }

      if (!sorted) {
        arr.unshift(element)
        pointer++
      }
    } else {
      pointer++
    }
  }

  return arr
}

module.exports = [insertionSort, insertionSortInPlace];
