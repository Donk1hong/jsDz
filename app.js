"use strict";

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal(billingStrategy) {
    return billingStrategy.price(this.amount);
  }
}

const fixBilling = {
  price(amount) {
    return amount;
  },
};

const hourBilling = {
  hour: 10,
  price(amount) {
    return amount * this.hour;
  },
};

const itemBilling = {
  itemCount: 5,
  price(amount) {
    return amount * this.itemCount;
  },
};

const billing1 = new Billing(100).calculateTotal(fixBilling);
console.log(billing1);
const billing2 = new Billing(100).calculateTotal(hourBilling);
console.log(billing2);
const billing3 = new Billing(100).calculateTotal(itemBilling);
console.log(billing3);
