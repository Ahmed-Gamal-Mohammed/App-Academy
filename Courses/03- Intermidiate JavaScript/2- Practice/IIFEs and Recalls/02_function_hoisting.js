// with var you can access the varaible before initialize it
function test(){
    // var dog   ==> initial value us (undefined)
    console.log(dog);
    var dog = 'dog';
};

test(); // ==> print out undefined

// You can not do the same thing with let and const

function test2 (){
    console.log(cat);
    let cat = "Meo";
};

// test2()// ==> error, you can not reference cat before initialize it


// Fucntion hoisting
// You can access the function before declaration in case you declare the funciton without store it in let or const varaiables

hello(); // prints "hello!"
function hello(){
    console.log("Hello!");
};

// You can not do the same thing when you store (assign) the funcion to the variable

// sayHi(); // error, you can not reference cat before initialize it
let sayHi = function(){
    console.log("hi!");
};


// when you try to use var varaible to store the function
// sayHello(); // typeError: hello is not a function
var sayHello = function(){
    console.log("SayHEllo");
};


// Using Var:  Variable assignment Trumps function declaration

function foo(num){
    return "Iam a functoin";
};
var foo = "Iam a variable";
console.log(foo); // prints Iam a variable

var foo2 = "Iam a variable";
function foo2(num){
    return "Iam a functoin";
};
console.log(foo); // prints Iam a variable



// if you declare a variable with var without initialize it with name so in this case the **Function declarations trumps(تتغلب) Variables declaration**

var foo3;

function foo3(){
	return "Iam a function";
};

console.log(foo3); // [function: foo]
