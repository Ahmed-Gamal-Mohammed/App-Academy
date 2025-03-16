// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        // time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;

        this.length +=1;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // time complexity is O(n)

        // Add node of val to tail of linked list

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        //first we should
        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        // time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here

        if (this.length === 0) {
            return undefined;
        }else if(this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.length -=1;
            return removedNode;
        }else{
            let removedNode = this.head;
            this.length -=1;
            this.head = this.head.next;
            return removedNode;
        }

    }

    removeFromTail() {
        // Remove node at tail
        // time complexity is O(n)
        // Write your hypothesis on the time complexity of this method here
        if (this.length === 0) {
            return undefined;
        }else if (this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.length -=1;
            return removedNode;
        }else{
            let current = this.head;
            while(current.next.next){
                current = current.next;
            }
            let nextNode = current.next
            current.next = null;

            this.length -=1;
            return nextNode;
        }

        let current  = this.head;


    }

    peekAtHead() {
        // Return value of head node
        // time complexity is O(1)
        // Write your hypothesis on the time complexity of this method here
        if (this.length === 0) {
            return undefined;
        }

        return this.head.value;
    }

    print() {
        // Print out the linked list
        // time complexity is O(n)
        // Write your hypothesis on the time complexity of this method here
        if (this.length === 0) {
            return;
        }
        let current = this.head;

        while (current) {
        //   process.stdout.write(`${current.value}  `);
          console.log(`${current.value}`)
          current = current.next;
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
