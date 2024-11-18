function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let result = [];

    // Use a for loop to iterate over odd indices
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

    let result = [];

    // Use a for loop to iterate over odd indices, starting from the end
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 !== 0) { // Ensure only odd indices are considered
            result.push(arr[i]);
        }
    }

    return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let result = [];

    // Use a for loop to iterate over power-of-2 indices
    for (let index = 1; index < arr.length; index *= 2) {
        result.push(arr[index]);
    }

    return result;

}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here

    let result = [];

    // Use a for loop to iterate over indices that are powers of n
    for (let index = 1; index < arr.length; index *= n) {
        result.push(arr[index]);
    }

    return result;

}

function firstHalf(arr) {
    // Calculate the midpoint and round up to include middle index for odd-length arrays
    let midIndex = Math.ceil(arr.length / 2);
    let result = [];

    // Use a for loop to push elements into the result array
    for (let i = 0; i < midIndex; i++) {
        result.push(arr[i]);
    }

    return result;
}

function secondHalf(arr) {
    let result = [];

    // Calculate the midpoint
    let midIndex = Math.floor(arr.length / 2);

    // Use a for loop to push elements from the second half, excluding the middle element if odd length
    for (let i = midIndex + (arr.length % 2); i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
