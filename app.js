'use strict';

const buttons = document.querySelector('.buttons');
const counter = document.querySelector('.counter');
let countClick = 0;

buttons.addEventListener('click', (event) => {
  const buttonCLick = event.target.closest('.button');
  const button = [...buttons.children];

  if (!buttonCLick) {
    return;
  }

  button.forEach((btn) => {
    if (btn === buttonCLick) {
      buttonCLick.innerText = 'Нажата!';
    } else {
      btn.innerText = 'Нажми меня';
    }
  });

  countClick++;
  counter.innerText = countClick;
});
