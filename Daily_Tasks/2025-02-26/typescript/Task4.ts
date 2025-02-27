class Engine {
    horsepower: number;
    fuelType: string;

    constructor(horsepower: number, fuelType: string) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
}

class Car {
    make: string;
    model: string;
    year: number;
    engine: Engine;

    constructor(make: string, model: string, year: number, engine: Engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    start(): void {
        console.log(`${this.make} ${this.model} is starting...`);
    }

    printCarDetails(): void {
        console.log(`Car Details:
        Make: ${this.make}
        Model: ${this.model}
        Year: ${this.year}
        Engine Horsepower: ${this.engine.horsepower}
        Engine Fuel Type: ${this.engine.fuelType}`);
    }
}

// Example usage:
const myEngine = new Engine(300, 'Petrol');
const myCar = new Car('Toyota', 'Camry', 2022, myEngine);

myCar.start();
myCar.printCarDetails();