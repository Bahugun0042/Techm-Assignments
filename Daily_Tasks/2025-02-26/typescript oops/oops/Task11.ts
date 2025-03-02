class Shapes {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    draw(): void {
        console.log(`Drawing a shape of color ${this.color}`);
    }
}

class Circles extends Shapes {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    draw(): void {
        console.log(`Drawing a circle of color ${this.color} with radius ${this.radius}`);
    }
}

// Example usage
const shape = new Shapes("red");
shape.draw();

const circles = new Circles("blue", 5);
circles.draw();