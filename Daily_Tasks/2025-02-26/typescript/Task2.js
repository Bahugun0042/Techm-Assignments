var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus.prototype.start = function () {
        console.log("The bus ".concat(this.make, " ").concat(this.model, " of year ").concat(this.year, " is starting."));
    };
    return Bus;
}());
var myBus = new Bus('Mercedes', 'Sprinter', 2025);
myBus.start();
