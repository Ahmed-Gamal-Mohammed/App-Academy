// function print(){
//     console.log("SomeThingSlow function");
// }

// function somethingSlow() {
//     // some terribly slow implementation
//     // assume that this function takes 4000 milliseconds to return
//     setTimeout(print,4000);
// }

//   function foo() {
//     console.log("food");
//   }

//   function bar() {
//     console.log("bark");
//     setTimeout(baz,1500);
//   }

//   function baz() {
//     console.log("bazaar");
//   }

//   setTimeout(foo, 1000);
//   setTimeout(bar, 2000);
//   somethingSlow();


console.log("1");

setTimeout(function(){
    console.log("2");
},1000);

setTimeout(function(){
    console.log("3");
},0);

console.log("4");
