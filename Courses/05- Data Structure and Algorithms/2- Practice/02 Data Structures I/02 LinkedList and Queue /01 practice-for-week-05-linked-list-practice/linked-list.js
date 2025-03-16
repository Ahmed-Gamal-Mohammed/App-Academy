class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

    // time complexity O(1) ... space is O(n)
  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode( val, null);
    newNode.next = this.head;
    this.head = newNode;
    this.length ++;
  }

    // time complexity O(n) ... space is O(n)
  addToTail(val) {
    if(this.head === null){
      this.head = new LinkedListNode(val,null)
      this.length++;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = new LinkedListNode(val, null)
    this.length++;
  }

  // You can use this function to help debug
    // time complexity O(n) ... space is O(1)
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
