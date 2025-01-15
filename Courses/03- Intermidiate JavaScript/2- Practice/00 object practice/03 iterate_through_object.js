let object = {name :"Ahmed", age: 22, weight: 83};

// new Kind of iterating
for (const key in object) {
//    statements;
}


for (const key in object) {
    console.log(key); // ==> print the name of keys in the object
}

for(let key in object){
    console.log("The " + key + " value is: ",object[key]); // -==> print out the value of each key
}
