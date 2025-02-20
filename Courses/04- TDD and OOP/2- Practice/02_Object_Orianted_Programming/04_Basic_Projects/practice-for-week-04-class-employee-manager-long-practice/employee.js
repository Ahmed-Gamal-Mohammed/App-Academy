class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if (manager != null) {
            manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier){
        return this.salary * multiplier;
    }
}



// const temp = new Employee("Ahmed",90000,"Software Engineer","Taha Mohamed");

// console.log(temp);

// console.log(temp.calculateBonus(0.15));


module.exports = Employee;
