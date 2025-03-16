- **Cashing is one of the most common and impactful methods of increasing code performance.**
- Caching is a technique used to improve the performance of systems by storing the results of expensive or frequently used computations so that they can be quickly retrieved later, rather than recalculating them each time they are needed
- Given a slow, frequently used calculation, you calculate it once and store the result.
- Then every other time it's called, you look up the answer instead of recalculating it.
- This method of trading space for time is very efficient and appears throughout all of computing, from CPU caches speeding up memory access in hardware to browser caches that reduce server requests for images and static assets.
- Caching can also speed up self-contained algorithms with redundant calcuations.
- **Trading Space for Time**: Caching involves using additional memory (space) to store results so that you can save time in the future. Instead of performing a slow calculation or fetching data from a slow source repeatedly, you do it once, store the result, and then reuse it as needed.
- **Common Applications**:
    - **CPU Caches**: In hardware, CPUs use small, fast memory caches to store frequently accessed data from slower main memory. This speeds up data access and improves overall system performance.
    - **Browser Caches**: Web browsers store static assets like images, CSS files, and JavaScript files locally after the first request. This reduces the need to repeatedly download these files from the server, speeding up page load times.
- **Algorithm Optimization**: In software, caching can be used to optimize algorithms that perform redundant calculations. For example, if an algorithm repeatedly calculates the same value, you can store the result of the first calculation and reuse it, avoiding the need to recompute it.
- **Benefits of Caching**
	- **Speed**: Reduces the time needed to perform repetitive calculations or fetch data.
	- **Efficiency**: Minimizes resource usage by avoiding redundant operations.
	- **Scalability**: Helps systems handle more requests or data by reducing the load on critical resources.
- **Trade-offs**
	- **Memory Usage**: Caching requires additional memory to store the results.
	- **Complexity**: Implementing caching can add complexity to the system, especially when dealing with cache invalidation (ensuring the cached data is up-to-date).
## Caching return values
Say you want to know how many peaches are in a box of fruit. To find out, you would look at each item in the box and tally up the number of peaches. Now imagine you have to do this dozens of times every day. Instead of counting each time, you could count the peaches once and write down the amount on a piece of paper. Now, everytime you want to know the peach count, you can simply look at the list. You must update the list anytime you add or remove a peach but as long as the contents stay the same your list will remain accurate.

This is a form of caching, and how `array.length` is able to count _n_ values in **O(1)** time.
## Caching pure functions
- A **pure function** is a function whose output depends only on its input, and cause no side effects, These are also know as **stateless function** and are useful for their **predictability** 
- One benefit is that the outputs can be easily cashed with the input as the key 
Consider this pure `multiply` function which calculates the product of two positive integers by adding the first to itself multiple times.
```node.js
function multiply(a, b) {

  let product = 0;

  for (i = 0 ; i < b ; i++) {
    product += a;
  }

  return product;
}
``` 

This is an **O(n)** operation, where _n_ is equal to the second number, `b`. While not particularly efficient, you could speed up subsequent calculations with the same input using a cache. The plan would look something like this:
1. Create a unique key containing the inputs
2. If the key does not exist in the cache, run the calculation and store it in the cache
3. Return the cached value

Translated to code, it would look like this:
```node.js
const cashe = {};

function multiplyCashe(a,b){
	// Create a unique key containing the inputs 
	const key = `${a}x${b}`;

	// if the key doesn't exist in the cashe 
	if(cashe[key] === undefined){
		// run the calculation and store it in the cashe 
		cashe[key] = multiply(a,b);
	}

	return cashe[key];
}
```
## **When to Use Caching**

Caching is most useful when:
- The function is **pure** (output depends only on input).
- The function is **expensive to compute** (e.g., involves loops, recursion, or external calls).
- The same inputs are likely to be reused frequently.
## Caching sub-problems
The problem in the  recursive function is the **Stack overflow** in large number of n 
**To avoid recomputing sub-problems and prevent stack overflow, We use [dynamic cache] also know as [memoization]** 
The idea is:
1. **Store the result** of each sub-problem the first time it’s computed.
2. **Reuse the stored result** for subsequent calls with the same inputs.
Here’s how caching is implemented for the recursive function:
```node.js
const cache = {};

function recursiveMultiplyCached(a, b) {
  if (b === 1) return a; // Base case

  // Create a unique key based on the inputs
  const key = `${a}x${b}`;

  // Check if the result is already in the cache
  if (cache[key] === undefined) {
    // If not, compute the result and store it in the cache
    cache[key] = a + recursiveMultiplyCached(a, b - 1);
  }

  // Return the cached result
  return cache[key];
}
```
### **4. How It Works**
- **First Call**: When you call `recursiveMultiplyCached(2, 1000000001)`, the function:
    1. Creates a unique key (`"2x1000000001"`).
        
    2. Checks if the key exists in the `cache` object. Since it doesn’t, it computes the result by recursively calling itself with `b - 1`.
        
    3. Stores the result in the cache under the key `"2x1000000001"`.
        
    4. Returns the result.
- **Subsequent Calls**: If the same inputs are used again, the function:
    1. Finds the result already in the cache.
        
    2. Returns the cached result **instantly**, without recalculating.
### **5. Benefits of Caching Sub-Problems**
- **Prevents Stack Overflow**: By caching results, the function avoids deep recursion and excessive call stack usage.
    
- **Improves Performance**: Reduces redundant computations by reusing cached results.
    
- **Scalability**: Allows the function to handle much larger inputs without crashing.


## Memoization: creating a "memo" cache