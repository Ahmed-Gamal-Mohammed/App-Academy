# Destructing data into variables 
The destructing assignment syntax allows you to extract parts of an array or object into distinct variables

```
let numArray = [10,20];

// here we are *unpacking* the array values into two separate variables 

let [firstE1, secondE2] = numArray;

console.log(firstE1); // 10
console.log(secondE2); // 20
```

We can alternatively declare our variables before destructuring as well

```
let animalArray = ["tiger", "hippo"];

let animal1, aniamal2;

// here we are "unpacking" the array values into two separte variables 

[animal1, animal2] = animalArray;


console.log(animal1);   // tiger
console.log(aniaml2);   // hippo
```


# Destructuring objects into variables 
One of the most useful applications for destructuring is the ability to take apart and assign little slices of large objects to variables.

ex
```
let obj = {name: "Apples", bread" ["tabby", "short hair"]};

let {name, bread} = obj;

console.log(name); // Apple
console.log(bread); //  ["tabby", "short hair"]
```

Now this syntax works by matching object `properties`, so we can choose exactly which keys we want. If we only wanted to save certain properties, we could do something like this:
```
let { a, c } = { a: 1, b: 2, c: 3 };

a; //=> 1
c; //=> 3
```

