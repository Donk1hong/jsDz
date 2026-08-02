"use strict";

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const btn = document.querySelectorAll("button");
const result = document.querySelector(".result");

function calculate(event) {
  if (number1.value === "" || number2.value === "") {
    return;
  }

  const first = Number(number1.value);
  const second = Number(number2.value);
  const operation = event.target.dataset.operation;

  let sum;

  if (operation === "+") {
    sum = first + second;
  } else if (operation === "-") {
    sum = first - second;
  } else if (operation === "*") {
    sum = first * second;
  } else if (operation === "/") {
    if (second === 0) {
      result.innerText = "На ноль делить нельзя";
      return;
    }

    sum = first / second;
  }

  result.innerText = `Результат: ${sum}`;
}
