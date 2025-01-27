// first its called callback function so it must be a function
// A callback is always a function that passed into another functoin as a parameter to this function
let foobar = function(callback){
    console.log("foo");
    // if you write callback without () so it will not be a function
    callback();

    console.log("bar\n\n");
}

// take care the variable seyHello here from function type not normal one
// According to the above.. so if you want to store it in another one, it must be another varibale from function type
let seyHello = function(){
    console.log("Hello, I am a callback function");
};

foobar(seyHello); // prints
// foo
// Hello, I am a callback function
// bar

//=========================================================================================================================================//

// we used a named callback in the example above, but we can also use a function expression directly.
// This is called an anonymous callback:
foobar(function(){
    console.log("Hello i'm a callback function but used directly.\nI am called anonymous");
});
// prints
// foo
// Hello i'm a callback function but used directly.\nI am called anonymous
// bar


// The advantage of using a named callback is that you can reuse the funciton many times.
// by referring to its name
// opt for an anonymous callback if you need a single-use
//=========================================================================================================================================//
