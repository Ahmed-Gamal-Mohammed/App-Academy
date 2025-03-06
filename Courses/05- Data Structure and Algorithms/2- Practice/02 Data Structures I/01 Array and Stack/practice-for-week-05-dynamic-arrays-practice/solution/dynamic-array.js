class DynamicArray {
  constructor(capacity = 4) {
    this.length = 0;
    this.capacity = capacity;
    this.data = new Array(capacity);
  }

  read(index) {
    return this.data[index];
  }

  unshift(value) {
    if (this.length >= this.capacity) {
      this.expandCapacity();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = value;
    this.length++;
  }

  expandCapacity() {
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
