var Student = /** @class */ (function () {
    function Student(name, rollNumber) {
        this.name = name;
        if (rollNumber !== undefined) {
            this.rollNumber = rollNumber;
        }
    }
    return Student;
}());
var student1 = new Student("Alice", 101);
var student2 = new Student("Bob");
console.log(student1);
console.log(student2);
