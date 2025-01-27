// Filter is a built-in JS method
// its return a new array containing only the elements for which the callback function returns true

let numbers = [1,2,3,4,5,6,7,8];
console.log(numbers); // prints // [1,2,3,4,5,6,7,8]

// Syntax
// The following is the syntax of the lang itself
let evenNumbers = numbers.filter(function(value){
    return value % 2 == 0;
});

console.log(evenNumbers); // prints [2,4,6,8]



// The following is the syntax of the my own filter
function myFilter(array,callback){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index],index,array)){
            result.push(array[index]);
        }
    }

    return result;
}

let oddNumbers = myFilter(numbers,function(val){
    return val % 2 !== 0;
});

console.log("The following is Odd Numbers: ", oddNumbers); // prints [1,3,5]
