// Your code here
Array.prototype.isEqual = function (array) {
    if (array.length !== this.length) {
        return false;
    }

    for (let index = 0; index < array.length; index++) {
        if (this[index] !== array[index]) {
            return false;
        }
    }

    return true;
}
