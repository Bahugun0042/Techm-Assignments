class Student {
    name: string;
    class: string;

    constructor(name: string, studentClass: string) {
        this.name = name;
        this.class = studentClass;
    }
}

// Example usage:
const student1 = new Student("John Doe", "10th Grade");
console.log(student1);