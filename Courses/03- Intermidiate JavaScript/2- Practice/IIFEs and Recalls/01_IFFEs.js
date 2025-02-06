// IFFE syntax
// (function(){
//     statements;
// })();

(function(){
    console.log("Run me immediately");
})();


let result = (function(){
    return "Store IFFE function";
})();
console.log(result);


function nameGen() {
    const bName = "Barry";
    console.log(bName);
}

// We can not reference the bName variable from this outer scope
// console.log(bName); //
console.log(nameGen()); // prints "Barry"


// Protcet our function itself not just the variables inside this function
(function(){
    const bName = "Barry";
    console.log(bName);

})(); // prints "Barry"


// we still can not reference the bName variable from this outer scope
// and now we have no hope of ever running the above function above again
console.log(bName); // error
