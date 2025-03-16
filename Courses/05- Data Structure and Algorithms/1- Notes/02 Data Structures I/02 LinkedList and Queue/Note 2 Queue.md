**A _queue_ is an abstract data type (ADT) that returns values in the same order they are added**
## FIFO: First in, first out
There are two important functions that define a queue: `enqueue()` and `dequeue()`. They work like this:
```node.js
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue(); // 1
queue.dequeue(); // 2

queue.enqueue(4);

queue.dequeue(); // 3
queue.dequeue(); // 4
```
The `1` is the first value into the queue and it's the first out when `dequeue` is called. `2` is the second in, and the second to come out. The `4` is enqueued after `2` is dequeued, but since `3` was added before `4`, `3` is dequeued first.
## Implementing a queue with an array
Since the queue is a linear data structure, it can be implemented using an array. That implementation would look something like this:
```node.js
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }
}
```
This is virtually identical to the stack definition in the previous reading, except using `shift()` to return values from the front of the array instead of `pop()` from the back. There is, however, a major performance inefficiency in this implementation. Can you spot it?

Arrays are defined by a pointer to the start of a contiguous block of memory that is divided up into even-sized chunks. Calling `shift()`, which removes the first item from the array, requires moving over every other element to the left by one, one chunk at a time. This makes `dequeue()` an **O(n)** operation and very inefficient for large values of `n`.

If only there were a linear data structure that could remove from the head and add to the tail in **O(1)** time... Oh wait, there is!
## Implementing a queue with a linked list
```node.js
const LinkedList = require('./linked-list.js');

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.addToTail(value);
  }

  dequeue() {
    const value = this.linkedList.head.value;
    this.linkedList.removeFromHead();

    return value;
  }
}
```
Using an optimized linked list implementation, `addToTail` and `removeFromHead` will both have time complexities of _O(1)_.

According to big-O analysis, this linked list implementation of `dequeue()` is _O(1)_, which is far superior to the array implementation's _O(n)_. Is it really more efficient though?
## Performance testing
In your practices, you will be implementing a linked list. You can use this to run the following test to verify the timing.
```node.js
q = new Queue();
n = 100000;

enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
  q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
```
Using the Linked List Queue implementation, you should have runtimes similar to 20ms to enqueue and 5ms to dequeue one hundred thousand integers. Using the array implementation required 7ms to enqueue but a whopping 877ms for the same number of `n`s. Increase `n` to two hundred thousand and you'll see even more of a difference.

```node.js
// 100k enqueues and dequeues with Linked List Queue
Enqueue time: 20ms
Dequeue time: 6ms

// 100k enqueues and dequeues with Array Queue
Enqueue time: 7ms
Dequeue time: 877ms
```
**The linked list implementation is clearly far superior, right? Not necessarily.**
## Tradeoffs
Try running the timing tests again, but this time set n to `1000`. Your results might look more like this:
```node.js
// 1k enqueues and dequeues with Linked List Queue
Enqueue time: 4ms
Dequeue time: 6ms

// 1k enqueues and dequeues with Array Queue
Enqueue time: 5ms
Dequeue time: 4ms
```
One thousand may seem like a big `n` to you but to a computer, it's tiny! Arrays are so fast that even an **O(n2)** operation like 1000 dequeues returns almost immediately. Also, think about your use cases. How often are you going to have a printer queue with 1000 jobs waiting to execute? Or 1000 people waiting for your customer service hotline? Even if you do reach those numbers, each entry is dequeued one at a time (**O(n)**), instead of all at once (**O(n2)**).

Instead of evaluating the efficiency costs, you can evaluate the _readability_, _maintainability_ and _simplicity_ costs. The linked list implementation is far more complex which makes it harder to read and understand which makes it harder to maintain. Remember, code is written for humans too. Clean, concise, readable code leads to faster development times and less bugs. In terms of development time, a simple array may be much faster than a linked list.

Of course, there are circumstances where you will need a queue that handles large `n`s and fast runtimes. When those situations arise, you can evaluate the requirements and make an appropriate decision, fully aware of the costs and benefits. This is the mark of a computer scientist: making good decisions based on a set of requirements.
