Selection sort is a very intuitive algorithm. Divide the array into sorted and unsorted halves, then one-by-one _select_ the smallest value from the unsorted portion and move it to the end of the sorted portion.

Here are the steps to sort an array with selection sort:
1. Divide the array into sorted and unsorted
2. Find and remove the smallest value from the unsorted
3. Add this value to the end of the sorted array
4. Repeat this until unsorted is empty and sorted is full

## Out-of-place selection sort (easy)
Let's say you want to sort the array `[3, 2, 0, 4, 1]` using out-of-place selection sort. Start by creating an empty array called `sorted`.

```
arr = [3, 2, 0, 4, 1]
sorted = []
```
Search through the unsorted array to find the minimum value: 0. Remove it from the unsorted array and add it to the end of the sorted array.

```
arr = [3, 2, 4, 1]
sorted = [0]
```
Repeat this process grabbing the next smallest value from the array, 1, and move it to the end of the sorted array.
```
arr = [3, 2, 4]
sorted = [0, 1]
```
The next smallest is 2, which moves to sorted.

```
arr = [3, 4]
sorted = [0, 1, 2]
```

Then comes 3.

```
arr = [4]
sorted = [0, 1, 2, 3]
```

Finally, the last character is moved and the sorted array can be returned.

```
arr = []
sorted = [0, 1, 2, 3, 4]
```
## In-place selection sort (medium)
Because the out-of-place selection sort creates a new array, the space complexity is **O(n)**. It's possible to perform this algorithm in-place, meaning in **O(1)** space using no extra memory. How is this possible? The answer involves mutating the input array.

Starting with the same input array, `[3, 2, 0, 4, 1]`, create a variable marking the divide between the sorted and unsorted halves of the original array. At each step, the _rule_ (sometimes called an _invariant_) is that everything to the left of the divider is sorted. Since the sorted half starts empty, the divider will start at 0.
```
arr = [3, 2, 0, 4, 1]
divider = 0
```

Select the smallest value from the unsorted half, which is 0, and move it to the end of the sorted half, and increment the divider by 1.

```
arr = [0, 3, 2, 4, 1]
divider = 1
```
Note that this requires shifting the 3 and 2 to the right by one position. This requires storing the 0 in a temp variable, moving the 2: `[3, 2, 2, 4, 1]`, then moving the 3: `[3, 3, 2, 4, 1]`, and finally placing the 0 in the correct place: `[0, 3, 2, 4, 1]`.
```
arr = [0, 1, 3, 2, 4]
divider = 2
```
The next step repeats by finding the smallest unsorted value, 1, shifting every unsorted value to the right by 1, then placing the 1 at the divider then incrementing the divider by 1.
```
arr = [0, 1, 2, 3, 4]
divider = 3
```
Next comes the 2 which shifts the 3 to the right by 1 and increments the divider again.
```
arr = [0, 1, 2, 3, 4]
divider = 4
```
The smallest unsorted value is now 3 which happens to be in the right place already so no shifting is needed. Same with the 4. After verifying that both are in the right place, the divider increments again.

```
arr = [0, 1, 2, 3, 4]
divider = 5
```
Now that the divider is at the end of the array (`divider === arr.length`), the unsorted half of the array is empty and the sorted half is full. At this point, the array can be returned but since this algorithm mutates the original array (it was passed by reference) you don't actually need to return the array at all.

**Note that both out-of-place and in-place insertion sorts have time complexities of `O(n2)`. Can you figure out why?**
