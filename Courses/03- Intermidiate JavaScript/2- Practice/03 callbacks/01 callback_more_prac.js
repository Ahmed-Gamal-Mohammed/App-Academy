// A More intersting Example
// A callback behaves just like any other functoin, meaning it can accept its own arguments and return a value

let temp = function(num1,num2,callback){
    let sum = num1 + num2;
    let result = callback(sum);

    return result;
};

let double = function(num){
    return num * 2;
};

let negative = function(num){
    return num * -1;
};

// The function double passed here as a callback function
console.log(temp(2,3,double)); // prints 10

// The function negative passed here as a callback function
console.log(temp(2,3,negative)); // prints -5


// We know that if you passed a few argument and try to use any of non passed arguemnt you will get undefinced
// you can use this as an advantage

let add = function(num1, num2, callback){
    if(callback == undefined){
        return num1 + num2;
    }else{
        return callback(num1+  num2);
    }
};

console.log(add(9,40)); // 49
console.log(add(9,40,Math.sqrt)); // 7
