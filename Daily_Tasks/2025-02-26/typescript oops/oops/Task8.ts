class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age > 0 ? age : 0;
    }
}

const student1 = new Student("Ram", 20);
const student2 = new Student("Rahim", -5);

console.log(student1); 
console.log(student2); 