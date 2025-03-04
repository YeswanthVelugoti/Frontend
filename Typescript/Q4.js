var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        return "The engine of ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is now running!");
    };
    return Car;
}());
var myCar = new Car("Tata", "indica", 2022);
console.log(myCar.startEngine());
