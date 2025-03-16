Here are the steps to sort an array with insertion sort:
1. Divide the array into sorted and unsorted
2. Pick and remove a value from the unsorted
3. Insert it into the correct place in the sorted
4. Repeat this until unsorted is empty and sorted is full

**There's two ways you can go about this, out-of-place or in-place.**
## Out-of-place insertion sort (easy)
Let's say you want to sort the array `[3, 2, 0, 4, 1]` using out-of-place insertion sort. Start by creating an empty array called `sorted`.
```
arr = [3, 2, 0, 4, 1]
sorted = []
```

Start by removing a value from the input array and "inserting" it in the correct position of the sorted array. We'll use the first value in the array, the `3` and put it right in the empty `sorted` array. We will continue this process until `arr` is empty.

```
arr = [2, 0, 4, 1]
sorted = [3]
```

The next value in the array is `2`, so remove that and insert it in the correct position. Since 2 is less than 3, it is inserted in the front.

```
arr = [0, 4, 1]
sorted = [2, 3]
```
The next value out of the input array is `0`, which is less than `2` so goes at the front of `sorted`.
```
arr = [4, 1]
sorted = [0, 2, 3]
```
Next comes `4`, which goes at the end.
```
arr = [1]
sorted = [0, 2, 3, 4]
```

The final value is `1`, which is inserted between the `0` and `2`. Think carefully about this step. How would you implement this in code? Put another way, how would you determine the correct position in the array to insert the value, and how would you perform the insertion?
```
arr = []
sorted = [0, 1, 2, 3, 4]
```
Now that the input array is empty, the sorted array is complete and can be returned.
## In-place insertion sort (medium)
Because the out-of-place insertion sort creates a new array, the space complexity is **O(n)**. It's possible to perform this algorithm in-place, meaning in **O(1)** space using no extra memory. How is this possible? The answer involves mutating the input array.

Starting with the same input array, `[3, 2, 0, 4, 1]`, create a variable marking the divide between the sorted and unsorted halves of the original array. At each step, the _rule_ (sometimes called an _invariant_) is that everything to the left of the divider is sorted. Since the sorted half starts empty, the divider will start at 0.