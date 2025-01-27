// Map is a built-in function in Js
// it does not modefiy the original array, its create and return a new array
// Callback function applied to each element of the array

// Syntacx
// let newArray = array.map(callback(currentValue, index, array));

let peeps = ['kafele', 'cindy','join','paloma'];
console.log(peeps); // prints ['kafele', 'cindy','join','paloma']

let newPeeps = peeps.map(function(el){
    return  el.toUpperCase() + `!!!`;
});

console.log(newPeeps); // prints ['KAFELE!!!', 'CINDY!!!','JOIN!!!','PALOMA!!!']


// Create your own version of Map
let myMap = function(array,callback){
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(callback(array[index],index,array));
    }

    return newArray;
};

// it takes two parameters. the arrray iterates of and the callback
let callback = function(el){
    return el.toLowerCase() + `!!!`;
};
let newpeeps = myMap(newPeeps,callback);
console.log(newpeeps);
