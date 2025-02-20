const Manager = require('./manager');
const Employee = require('./employee');

// ## Bonus Phase 5: Testing

// Imagine you have a company structured like this:

// | Name     | Salary  | Title      | Boss   |
// | -------- | ------- | ---------- | ------ |
// | Hobbes   | 1000000 | Founder    | null   | // Manger has not a manager
// | Calvin   | 130000  | Director   | Hobbes |  // Manger have an Manger
// | Susie    | 100000  | TA Manager | Calvin | .. Manager have an Manager
// | Lily     | 90000   | TA         | Susie  |   // Employee
// | Clifford | 90000   | TA         | Susie  | // Employee

// If Hobbes gets a bonus multiplier of 0.05, their bonus will be $70,500.

// If Calvin gets a bonus multiplier of 0.05, their bonus will be $20,500.

// If Susie gets a bonus multiplier of 0.05, their bonus will be $14,000.

// If Lily gets a bonus multiplier of 0.05, their bonus will be $4,500.

// If Clifford gets a bonus multiplier of 0.05, their bonus will be $4,500.

// Create a new file called __test.js__. Create the scenario above and make sure
// you get the correct bonuses for each employee.


const Hobbes = new Manager("Hobbes",1000000,"Founder");
const Calvin = new Manager("Calvin",130000,"Director",Hobbes);
const Susie = new Manager("Susie",100000,"TA Manager",Calvin);
const Lily = new Employee("Lily", 90000, "TA",Susie);
const Clifford = new Employee("Clifford", 90000, "TA",Susie);

console.log(Hobbes);
console.log(Hobbes.calculateBonus(.05));
console.log(Calvin.calculateBonus(.05));
console.log(Susie.calculateBonus(.05));
console.log(Lily.calculateBonus(.05));
console.log(Clifford.calculateBonus(.05));
