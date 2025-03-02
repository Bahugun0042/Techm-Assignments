class Shape {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
}

const circle = new Circle("Blue", 5);
console.log(`Color: ${circle.color}, Radius: ${circle.radius}`);
