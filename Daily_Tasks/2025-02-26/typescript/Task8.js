var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age > 0 ? age : 0;
    }
    return Student;
}());
var student1 = new Student("Ram", 20);
var student2 = new Student("Rahim", -5);
console.log(student1);
console.log(student2);
