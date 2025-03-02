class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model);
    }
}

class SportsCar extends Car {
    constructor(make: string, model: string) {
        super(make, model);
    }
}

const mySportsCar = new SportsCar('Ferrari', '488 Spider');
console.log(`Make: ${mySportsCar.make}, Model: ${mySportsCar.model}`);