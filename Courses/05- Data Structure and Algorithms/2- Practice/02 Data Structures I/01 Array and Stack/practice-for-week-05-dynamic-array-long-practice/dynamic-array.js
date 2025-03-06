class DynamicArray {

  constructor(capacity = 4) {
    this.length = 0;
    this.capacity = capacity;
    this.data = new Array(capacity);
    // Your code here
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.length >= this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {

    // Your code here
    if (this.length === 0) return undefined; // Handle empty array case
    let result = this.data[this.length - 1];
    this.length -= 1;
    return result;
  }

  shift() {

    // Your code here
    if (this.length === 0) return undefined; // Handle empty array case
    let result = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length -= 1;
    return result;
  }

  unshift(val) {

    // Your code here
    if (this.length >= this.capacity) {
      this.resize();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {

    // Your code here
    const newCapacity = this.capacity * 2;
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.capacity = newCapacity;
    this.data = newData;
  }

}


module.exports = DynamicArray;
