let test = function(foobar){
    console.log("Hello This function not a callback");
    foobar();
    console.log("The above function is a callback");
};


let foobar = function(callback){
    console.log("foo");
    callback();
    console.log("bar");
};

let sayHello = function(){
    console.log("hello");
};

test(()=>foobar(sayHello)); // prints
// Hello This function not a call back
// foo
// hello
// bar
// The above function is a callback

// foobar(sayHello); // prints
// foo
// hello
// bar


// ==========================================================================================================================================//
console.log("a call back function can accept its own arguments");
let add = function(num1,num2,cb){
    if (cb === undefined) {
        return num1 + num2;
      } else {
        return cb(num1 + num2);
    }
};

let double = function(num){
    return num * 2;
};

let negative = function(num){
    return num * -1;
};

console.log(add(2,3,double));   // 10
console.log(add(4,5,negative)); // -9


console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8

console.log(add(60, 4, Math.sqrt)); // 8


console.log(add(2, 3, function(n) {
    return n;
}));



console.log(add(9, 40)); // 49
console.log(add(9, 40, Math.sqrt)); // 7
