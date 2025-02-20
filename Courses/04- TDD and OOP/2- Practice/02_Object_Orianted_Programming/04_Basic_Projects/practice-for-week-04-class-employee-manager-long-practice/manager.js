const Employee = require('./employee');

class Manager extends Employee{
    constructor(name,salary,title,manager = null, employees = []){
        super(name,salary,title,manager);
        this.employees = employees;
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    // this calculate the manger salary
    calculateBonus(multiplier) {
        const totalSubSalary = this._totalSubSalary();
        return (this.salary + totalSubSalary) * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }
        return sum;
    }
}




module.exports = Manager;
