const operations = ['+', '-', "*"];

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

module.exports = {
    add,
    subtract,
    operations
};

// You can export them using the following way , but the first is better than the following
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.operations = operations;


// You also can export using the following (withoud using module)
// exports.add = add;
// exports.subtract = subtract;
// exports.operations = operations;

// Exporting a single item from a module
// module.exports = multiply;
