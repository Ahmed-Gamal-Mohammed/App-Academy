# Linked List 
- Linked List are used to store an ordered sequence of values
- They take much more space and are slower than arrays in almost every way 

We learn them because **Pointers**

- **Pointers** allow you to store complex, multi-dimensional in a linear memory bank. 
- They unlock features like multi-type arrays, pass-by-reference methods, graph traversal and many more.
- Pointers are everywhere but hidden from sight in high level languages like JavaScript and Python. Understanding them is the key to understanding many of the trickier concepts in computer science.
## What is a linked list?
A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node.

This is often represented as an image like this:
![[Screenshot 2025-03-06 at 16-20-57 .png]]

Each node in a linked list chain consists of two values: a data value and a pointer. In code, the node looks like this:
```node.js
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
```

The linked list itself is just a pointer to the first node which is called the `head` node. The list continues until it reaches a `null` node pointer. If the `head` 
pointer itself is `null`, that means the LinkedList is empty.
```node.js
class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
  }
}
```

A Linked List storing the values 2,99 and 37 would look something like this :
```
head
 |
 v
 12 -> 99 -> 37 -> NULL
```
In code, that could be implemented like this:
```node.js
node3 = new LinkedListNode(37,null);
node2 = new LinkedListNode(99,node3;
node1 = new LinkedListNode(12,node2);

ll = new LinkedList();
ll.head = node1;
```

## Adding to the head of a Linked List 
The creation of nodes should be completely abstracted away by the linked list data structure 
You want to be able to build the linked list just like by calling `addToHead` and `addToTail`, just like you would call `unshift` or `push` in an array 

```node.js
ll = new LinkedList();
ll.addToHead(37);
ll.addToHead(99);
ll.addToHead(12);
ll.print(); // 12 -> 99 -> 37 -> null
```
How would you write an algorithm to accomplish this? Take a moment to understand the problem and come up with a plan. Write out your steps before moving on for comparison.

Got a solution? Here are steps that will add a node to the head of a linked list:

1. Create a new node with the given value
2. Set the node's `next` pointer to the list's current head pointer
3. Set the list head to point to the new link

In code, that might look like this:
```node.js
  addToHead(value) {

    // Create a new node with the given value
    const newNode = new LinkedListNode(value, null);

    // Set the node's `next` pointer to the list's current head         pointer
    newNode.next = this.head;

    // Set the list head to point to the new link
    this.head = newNode;
  }
```

You can refactor this to a single line of code! Can you figure out how?
```node.js
addToHead(value) {
  this.head = new LinkedListNode(value, this.head);
}
```
## Time complexity of `addToHead`
What is the time complexity of `addToHead`? To determine this, find the time complexity of each step.

1. Creating a new node is _O(1)_
2. Setting a the _next_ pointer is _O(1)_
3. Setting the _head_ pointer is _O(1)_

Since each of these steps are _O(1)_, the overall time complexity of `addToHead` is also _O(1)_. Compare this to adding to the head of an array (`unshift`) which is _O(n)_. Unlike an array, this requires no shifting of elements and no iteration, resulting in a constant runtime regardless of the number of elements contained.
## Traversing a linked list
Say you wanted to write a function to print the values in your linked list. This would require you to _traverse_ the linked list, which means **visiting each node in order**. The print loop will visit each node, printing each value and moving to the `next`, until it reaches a `null` pointer. Since `null` evaluates to `false` in a conditional expression, this will exit the loop and terminate.

```node.js
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
```
Note: `process.stdout.write` is used instead of `console.log` to keep all values on the same line

Traversal is also used to search a linked list. Like iterating through an array, to search for a value in a linked list you must visit each node in order and check the value. If you find the value, return `true`. If you reach the end without finding the target value, return `false`.

**Since you must visit every node in a traversal, this has a time complexity of _O(n)_.**

## Linked Lists in memory
If you were to examine the `LinkedListNode`s in memory, they might look something like this:
```
192: ...
196: 220   // Linked List `head` pointer
200: 1     // First node added, last in the list
204: null
208: 2     // Second node added, second in the list
216: 200
220: 3     // Third node added, first in the list
224: 208
230: ...
```
The first node created has a value of `1` and points to `null`. The next node has a value of `2` and points to the address of the first node: `200`. The third node has a value of `3` and points to the second link's memory address: `208`. The head of the linked list at memory address `196` would update each time a new node is added, ending with the third node at `220`. As you can see, these are totally out of order in memory but can be traversed in order by following the pointers.

From this, you can see that unlike arrays, nodes aren't required to be in contiguous blocks of memory. They can be completely spread out:
```
200: 2     // Second node
204: 612

// ...

400: 848   // Linked List head

// ...

612: 3     // Third node
616: null

// ...

848: 1     // First node
852: 200
```
Here, the linked list is at address `400`, with the `head` pointing to the first node at address `848`. The second is at `200` and third at `612`. By following the chain of pointers, you can traverse the list in order.

**Compared to an array, the linked list occupies a lot more memory.** Storing these same three values in an array only takes three slots of memory.
```
196: 1
200: 2
204: 3
```
The contiguous structure of arrays also lets you visit the third value in **O(1)** time by calculating the memory offset. Because linked list nodes can exist anywhere in memory, to visit the third node you must first visit the first and second nodes. To visit the _nth_ node in a linked list, you must traverse through all prior nodes. This is an **O(n)** operation.

# Linked List Optimization
Previously you learned a new way to store sequential data: linked lists. In this reading, you will analyze the structure and performance of a basic linked list, make optimizations and learn to evaluate the tradeoffs.

**space complexity for Linked List is O(n)**
## `Linked list performance review`
Since a linked list requires _n_ nodes to store _n_ values, that gives it a space complexity of **O(n)**.

The time complexity of `addToHead()` is **O(1)** since each of its steps operate in constant time, regardless of the size of the list. Therefore, adding _n_ items to the head of the `LinkedList` would take **O(n)** time.

The time complexity of any operation requiring a traversal, like `print` or `search` requires visiting _n_ nodes, for a time complexity of **O(n)**.

## `addToTail()`
Like arrays, linked lists store data in an ordered sequence. Through big-O analysis you can confirm that adding a value to the head of a linked list runs in **O(1)** time, out-performing the array equivalent of `unshift()` which runs in **O(n)** time.

What about adding to the end of a linked list?
In order to answer that, first you must devise an algorithm to add a value to the end of a linked list. Before you move on, try to come up with your own method. The function should should work like this:
```node.js
const ll = new LinkedList();

ll.print();        // NULL
ll.addToTail(0);
ll.print();        // 0 -> NULL
ll.addToTail(1);
ll.print();        // 0 -> 1 -> NULL
ll.addToTail(2);
ll.print();        // 0 -> 1 -> 2 -> NULL
ll.addToTail(3);
ll.print();        // 0 -> 1 -> 2 -> 3 -> NULL
```
As always, start by understanding the problem. Ask yourself these questions:
- What is the difference between adding to the head of a linked list versus adding to the tail?
- How do you find the end of the list when you're only given the head?
- How do you know which node is the last in the list?
- What should happen if the list is empty?

Don't move on until you thoroughly understand the problem.

Once you do, come up with a plan and write it out in steps. Your plan might look something like this:
1. Create a new node with the given value.
2. If the head is `null`, set it to the new node and return.
3. Iterate through the linked list until you reach the last node.
4. Point the last node's pointer to the new node.

Pay particular attention to step 3. In order to get to the last node in the linked list, you need to visit each other node in order, following the chain of `next` pointers.

So, to add `4` to the tail of `0 -> 1 -> 2 -> 3 -> NULL`, you would start from the head node, which is 0.
```
head
 |
 v
 0 -> 1 -> 2 -> 3 -> NULL
```
Then you would move down `next` nodes, starting from 1, then 2, until you reach the last node with a `next` value of `null`. Once you find it, you can create the new node and add it to the end.
```
head           last new
 |              |    |
 v              v    v
 0 -> 1 -> 2 -> 3 -> 4 -> NULL
```
For a linked list containing _n_ items, this is an **O(n)** operation.
## Optimizing `addToTail`
With this implementation, `addToTail()` is _O(n)_. In order to reach the tail of the linked list, you must first walk through each prior node. Adding to the end of an array with `push()` is _O(1)_. Is there any way to improve the time complexity for this linked list?

The answer is yes, but it comes at a cost. To be more specific, you can improve the speed of `addToTail()` by adding a `tail` pointer to the linked list, essentially trading space for time.

Is it worth the cost? Let's see.
```node.js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
```
Like the `head` pointer, `tail` points to the last node in the list. Now instead of visiting each node to get to the end, you can get there directly.
```
head          tail
|              |
v              v
1 -> 2 -> 3 -> 4 -> null
```
Before coming up with a plan, take some time to understand the problem of adding to the end of a linked list given a tail pointer.
- Where does the tail pointer set?
- How can you tell if the list is empty?*
- What happens if `tail` is null and `head` isn't, or vice-versa?
- What happens to the old tail when the new one is set?

Once you are satisfied with your answers to these questions, write out your plan in steps. It might look something like this:

1. Create the new node
2. If the list is empty, point head and tail to new node and return
3. Point the current tail's `next` to the new node
4. Point `tail` to the new end node

This algorithm is similar to the `addToHead` function in that none of the operations require a traversal. Each step has a constant runtime, regardless of the size of the list, for a time complexity of _O(1)_. This is a nice performance optimization!

You're not done yet, though. Adding a `tail` pointer means that you need to update `addToHead` too. Just like adding to the tail of an empty linked list must point both `head` and `tail` pointers to the new node, adding to the head of an empty list must do the same.

```node.js
  addToHead(value) {
    this.head = new LinkedListNode(value, this.head);

    // Must account for the tail pointer in an empty list
    if (!this.tail) this.tail = this.head;
  }
```
`addToHead` is still _O(1)_ but the code changes from an elegant one-liner to a slightly less elegant two-liner.

## `removeFromHead()` and `removeFromTail()`
Removing from the head is reasonably simple: You just point `head` to the second node in the list. The old head will now be unassigned and have no references (meaning, no pointers pointing to it) and will get automatically [garbage collected](https://en.wikipedia.org/wiki/Garbage_collection_\(computer_science\)) from memory.

```node.js
  removeFromHead() {
    if (this.head) this.head = this.head.next;
  }
```
If there is only one node in the list, this works fine because it will set `this.head` to `null`. If you are using a `tail` pointer, you'll also need to set that to `null` if the resulting list is empty.
```node.js
  removeFromHead() {
    if (this.head) this.head = this.head.next;

    if (this.head === null) this.tail = null;
  }
```

The solution for the O(n) for removing from the tail is the **doubly linked List**
## **Garbage collected:** 
- **Garbage Collected** is a form of automatic memory management,
- The _garbage collector_ attempts to reclaim memory that was allocated by the program, but is no longer referenced; 
- Garbage collection relieves the programmer from doing [manual memory management], where the programmer specifies what objects to de-allocate and return to the memory system.

## Doubly Linked List
Again, the way to optimize `removeFromTail` is to add another pointer, exchanging more space for time. This requires adding a `previous` pointer to the `LinkedListNode` class.
```node.js
class DoublyLinkedListNode {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}
```
With this update, the `removeFromTail` becomes far cleaner and mirrors `removeFromHead`'s **O(1)** time complexity. Now you can use this algorithm:
1. If the list is empty, do nothing
2. If there is only 1 node in the list, set `head` and `tail` to null
3. Otherwise, set `tail` to the current tail's `previous` node point the new tail to null


So to remove the tail from `1 <-> 2 <-> 3 <-> 4 <-> null`, start from the current tail:
```
head             tail
|                 |
v                 v
1 <-> 2 <-> 3 <-> 4 <-> null
```
Use the `previous` node to point `tail` to the 3 node, then point 3 to null.
```
head       tail
|           |
v           v
1 <-> 2 <-> 3 <-> null
```
Each of these operations is _O(1)_ improving the time complexity of `removeFromTail` from _O(n)_ to _O(1)_. Fantastic!
## Cost of a Doubly Linked List
Sure, the doubly linked list improves the efficiency of `removeFromTail` but at what cost?

First, there is the memory cost. While the `tail` pointer stores one new pointer for each list, the `previous` pointer stores an additional pointer for each _node_. This is a space increase of _O(n)_ versus _O(1)_.

There is also the cost of code complexity. All other linked list methods must be updated to work with this new pointer, whether it's needed or not.

Is it worth it?

It depends. Memory is pretty cheap even for large `n`s (4mb for n=1 million on 32-bit architecture) but the cost in readability may be even more expensive. You will be implementing both single and doubly linked lists. As you work on these tasks, keep in mind tradeoffs in both performance and readability.

