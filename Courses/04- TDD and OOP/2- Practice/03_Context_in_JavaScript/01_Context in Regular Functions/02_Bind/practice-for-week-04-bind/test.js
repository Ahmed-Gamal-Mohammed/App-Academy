// Your code here
const Employee = require("./employee");

const employee = new Employee("John Wick", "Dog Lover");


// // if i implement the following will print undefined instead this
// setTimeout(employee.sayName,2000);
// setTimeout(employee.sayOccupation,2000);



const sayHello = employee.sayName;


setTimeout(sayHello.bind(employee),2000);

const sayOcc = employee.sayOccupation;

setTimeout(sayOcc.bind(employee),3000);
