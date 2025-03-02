class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }
}

const emp = new Employee("Ram", 30, 101);
console.log(`Name: ${emp.name}, Age: ${emp.age}, Employee ID: ${emp.employeeId}`);
