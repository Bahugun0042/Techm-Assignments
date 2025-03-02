class Bus {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`The bus ${this.make} ${this.model} of year ${this.year} is starting.`);
    }
}

const myBus = new Bus('Mercedes', 'Sprinter', 2025);
myBus.start();