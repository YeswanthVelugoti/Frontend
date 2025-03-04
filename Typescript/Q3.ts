interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}

const emp = new Employee("Yeswanth", 24, 9);

console.log(emp.getEmployeeDetails());
