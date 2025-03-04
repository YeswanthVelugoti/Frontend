var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ID: ".concat(this.employeeId, ", Name: ").concat(this.name, ", Age: ").concat(this.age);
    };
    return Employee;
}());
var emp = new Employee("Yeswanth", 24, 9);
console.log(emp.getEmployeeDetails());
