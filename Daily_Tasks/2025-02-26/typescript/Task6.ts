class Student {
    name: string;
    rollNumber: number | undefined;

    constructor(name: string, rollNumber?: number) {
        this.name = name;
        if (rollNumber !== undefined) {
            this.rollNumber = rollNumber;
        }
    }
}

const student1 = new Student("Alice", 101);
const student2 = new Student("Bob");

console.log(student1); 
console.log(student2); 