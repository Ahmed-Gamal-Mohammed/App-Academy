// The following is a syntax to forEach
// array.forEach(callback(currentValue, index, array), thisArg)

// Parameters:

// A function that is executed for each element in the array. It takes three arguments:
// currentValue (required): The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array on which forEach was called.

// thisArg (optional):
// A value to use as this when executing the callback. If omitted, undefined is used, or the global object in non-strict mode.

let peeps = ["kafele", "cindy", "jon","paloma"];

// peeps.forEach(function(el,i){
//     console.log(el + " is at index: "+ i);
// });

// prints
// kafele is at index: 0
// cindy is at index: 1
// jon is at index: 2
// paloma is at index: 3

// if you pass the array itself as the third arguments like following you will get the following
// peeps.forEach(function(element, index, array){
//     console.log(element + " is at index: " + index);
//     console.log(array);
// });

// prints
// kafele is at index: 0
// [ 'kafele', 'cindy', 'jon', 'paloma' ]
// cindy is at index: 1
// [ 'kafele', 'cindy', 'jon', 'paloma' ]
// jon is at index: 2
// [ 'kafele', 'cindy', 'jon', 'paloma' ]
// paloma is at index: 3
// [ 'kafele', 'cindy', 'jon', 'paloma' ]

// =========================================================================================================================================//

let myForEach = function(array,callback,thisArg){
    for(let i=0; i < array.length; ++i){
        callback(array[i],i,array,thisArg);
    }
};

myForEach(peeps,function(element,index,array){
    console.log("This is my own forEach version");

    console.log(element + " is at index: " + index);
    console.log(array);
});
