// General syntax
// array.evrey(callback(element, index,array, thisArg))
// The returned value is bolean value ,, Ture or false

// Example

let numbers = [1,2,3,4,5];

// let allPositive = numbers.every(function(element){
//     return element > 0;
// });

// console.log(allPositive); // prints true

// let allEven = numbers.every(function(el){
//     return el % 2 == 0;
// });

// console.log(allEven); // prints false


// The following using thisArg
let value = 6;
// let check = numbers.every(function(num){
//     return num > this.value;
// },{value});

// console.log(check);

// If the array is empty, every returns true (because there are no elements to fail the test)
// If the array has missing elements (e.g., [1, , 3]), the callback is not called for the missing elements.


// =========================================================================================//
// 2. Creating Your Own every Function from Scratch

function myEvery(array, callback, thisArg) {
    for (let i = 0; i < array.length; i++) {
      // Check if the current element exists (handles sparse arrays)
      if (i in array) {
        // Call the callback with the correct `this` context
        if (!callback.call(thisArg, array[i], i, array)) {
          return false;
        }
      }
    }
    return true;
};

let allAboveValue = myEvery(numbers,function(num){
    return num > value;
});
console.log(allAboveValue);

value = 0;
allAboveValue = myEvery(numbers,function(num){
    return num > value;
});
console.log(allAboveValue);
