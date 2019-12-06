export function task5(){
class Car {
  static getSpecs(car) {
    this.maxSpeed = car.maxSpeed;
    this.speed = car.speed;
    this.isOn = car.isOn;
    this.distance = car.distance;
    this._price = car._price;

    console.log(
      `Max Speed: ${this.maxSpeed}, Speed: ${this.speed}, IsOn: ${this.isOn}, Distance: ${this.distance}, Price: ${this._price}`
    );
  }

  constructor(obj) {
    this.maxSpeed = obj.maxSpeed;
    this.speed = obj.speed = 0;
    this.isOn = obj.isOn = false;
    this.distance = obj.distance = 0;
    this._price = obj._price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    this.value = value;
    if (this.value + this.speed <= this.maxSpeed) {
      this.speed += this.value;
    }
  }

  decelerate(value) {
    this.value = value;

    if (this.value + this.speed > 0) {
      this.speed -= this.value;
    }
  }

  drive(hours) {
    this.hours = hours;

    if (this.turnOn) {
      this.distance += this.hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, _price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
}
