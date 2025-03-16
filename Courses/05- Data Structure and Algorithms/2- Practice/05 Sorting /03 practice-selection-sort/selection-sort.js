

function selectionSort(arr) {

  // Copy the original array
  let arrCopy  = arr.slice()

  // Create an array to store the sorted values
  let sorted  = [];
  // While the array is not empty...
  while(arrCopy.length !== 0){
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min  = arrCopy[0];
    let minInd = 0;
    for(let i = 1; i < arrCopy.length ; i++) {
      if(min > arrCopy[i]){
        min = arrCopy[i];
        minInd = i;
      }
    }
     // Save and remove the value at the min index
    const valueAtMinInd = arrCopy.splice(minInd,1)[0]
    // Add the min value to the end of the sorted array
    sorted.push(valueAtMinInd);
  }
  return sorted;
}

selectionSort([31,45,21,52,112])

function selectionSortInPlace(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    console.log(arr.join(","));

    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const minValue = arr[minIndex];

    // Shift all elements between minIndex and i forward by one place
    for (let k = minIndex; k > i; k--) {
      arr[k] = arr[k - 1];
    }

    // Place the minimum value at the correct position
    arr[i] = minValue;
  }

  console.log(arr.join(","));
}

// // Example usage
// const arrayToSort = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// selectionSortWithShift(arrayToSort);
// console.log("Sorted array:", arrayToSort);


// Example usage



module.exports = [selectionSort, selectionSortInPlace];
