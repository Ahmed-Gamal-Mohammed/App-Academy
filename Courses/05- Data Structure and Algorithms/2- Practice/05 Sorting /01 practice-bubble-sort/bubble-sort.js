
function bubbleSort(arr) {
  let swapped = false;
    // Iterate through the array
    for( let i = 0; i < arr.length -1; i++) {
      if(arr[i] > arr[i+1]){
        swapped = true;
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        console.log(arr.join(","));
      }
    }
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log


    // If you get to the end of the array and no swaps have occurred, return
    if (swapped === false){
      return arr;
    }
    return bubbleSort(arr);
    // Otherwise, repeat from the beginning

}
console.log(bubbleSort([2, 4, 6, 8, 1, 3, 5, 7, 9]))
module.exports = bubbleSort;
