- Bubble sort is a simple sorting algorithms,
- Walk through the entire array, 
- comparing each adjacent pair. If they are out of order, swap their positions. 
- Keep doing this until the entire array is sorted a bit more, 
- with the larger values **bubbling up** to the top 

**Here's the pseudo-code.**
1. Iterate through the array 
2. if the current value is greater than its neighbor to the right, swap those values 
3. if you get to the end of the array and no swaps have occurred, return 
4. Otherwise, repeat from the beginning
## Bubble sort example
Say you want to bubble sort this unsorted array: 
```
[3, 2, 0, 4, 1]
```
Starting from the beginning, check that each pair of adjacent values are in the correct order: small to large. The first pair of numbers, 3 and 2, are out of order so swap them.

```
[3, 2, 0, 4, 1]
 v  v
[2, 3, 0, 4, 1]
```
Next is 3 and 0. These are also out of order, so they are also swapped.
```
[2, 3, 0, 4, 1]
    v  v
[2, 0, 3, 4, 1]
```
Next is 3 and 4 are in the correct order, so nothing changes here.

```
[2, 0, 3, 4, 1]
       |  |
[2, 0, 3, 4, 1]
```
The last pair, 4 and 1 are out of order so these are swapped too.
```
[2, 0, 3, 4, 1]
          v  v
[2, 0, 3, 1, 4]
```
Now that the loop has finished, if no swaps have taken place then all elements are in order and the array is sorted. Since we have made swaps this pass, we start all over again from the first pair of values.
```
[2, 0, 3, 1, 4]
 v  v
[0, 2, 3, 1, 4]
    |  |
[0, 2, 3, 1, 4]
       v  v
[0, 2, 1, 3, 4]
          |  |
[0, 2, 1, 3, 4]
```

2 and 0 are swapped, but 2 and 3 are fine. 3 and 1 are swapped but 3 and 4 are correct. Since this pass still contained swaps, the loop repeats again from the first pair.
```
[0, 2, 1, 3, 4]
 |  |
[0, 2, 1, 3, 4]
    v  v
[0, 1, 2, 3, 4]
       |  |
[0, 1, 2, 3, 4]
          |  |
[0, 1, 2, 3, 4]
```
Only one swap this time, the 2 and 1, but the algorithm requires **zero** swaps to finish. So, one more loop.
```
[0, 1, 2, 3, 4]
 |  |
[0, 1, 2, 3, 4]
    |  |
[0, 1, 2, 3, 4]
       |  |
[0, 1, 2, 3, 4]
          |  |
[0, 1, 2, 3, 4]
```
Each pair is in the correct order and the full loop ran without any swaps, so the function can return.
## Pseudocode
```node.js
function bubbleSort(arr) {

// Iterate through the array

// If the current value is greater than its neighbor to the right
      
// Swap those values

// If you get to the end of the array and no swaps have occurred, return

// Otherwise, repeat from the beginning

}
```