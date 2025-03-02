class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(): void {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

class SUV extends Car {
    isOffRoadCapable: boolean;

    constructor(make: string, model: string, year: number, isOffRoadCapable: boolean) {
        super(make, model, year);
        this.isOffRoadCapable = isOffRoadCapable;
    }

    toggleOffRoadCapability(): void {
        this.isOffRoadCapable = !this.isOffRoadCapable;
        console.log(`Off-road capability is now ${this.isOffRoadCapable ? 'enabled' : 'disabled'}.`);
    }
}

// Example usage:
const mySUV = new SUV('Toyota', 'Land Cruiser', 2022, true);
mySUV.displayDetails();
mySUV.toggleOffRoadCapability();
mySUV.toggleOffRoadCapability();