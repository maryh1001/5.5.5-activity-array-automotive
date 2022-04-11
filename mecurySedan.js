//this includes the vehicle class as a module
const Vehicle = require("./vehicle").Vehicle;

class Sedan extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  start() {
    if (this.fuel > 0) {
      return (this.started = true);
    } else {
      return (this.started = false);
    }
  }
  loadPassenger() {
    if (this.passenger < this.maximumPassengers) {
      this.availableRoom = true;
    } else {
      this.availableRoom = false;
    }
  }
  scheduleService() {
      if (this.mileage > 30000) {
          this.timeForMaintenance == true;
          return this.scheduleService
      }
  }
}

//this shows how to call from this module...
let myCar = new Vehicle("Mecury", "Sedan", "1965", "gold", "20000");
myCar.start()
myCar.loadPassenger(5)
myCar.scheduleService()
// let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

// console.log(v.make)
console.log(Vehicle.make)
