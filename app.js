"use strict";

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  info() {
    console.log(`${this.#brand}, ${this.#model}, ${this.#mileage}`);
  }

  set mileage(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Смифная ошибка");
    }

    this.#mileage = value;
  }

  get mileage() {
    return this.#mileage;
  }
}

const car1 = new Car("BMW", "M5", 2000);
car1.info();
car1.mileage = 3000;
console.log(car1.mileage);
