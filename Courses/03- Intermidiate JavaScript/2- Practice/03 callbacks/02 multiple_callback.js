// Write a function, greaterResult, that accepts a number and two callbacks as arguments
// The function should call both callbacks, passing in the number, and return
// The result of callback that is larger

let greaterResult = function(num,callback1, callback2){
    if(callback1(num) < callback2(num) || callback1 == undefined){
        return callback2(num);
    }

    return callback1(num);
};

let doubler = function(n){
    return n * 2;
};

let squarer = function(n){
    return n * n;
};

console.log(greaterResult(5,doubler,squarer)); // 25
console.log(greaterResult(1,doubler,squarer)); // 2
