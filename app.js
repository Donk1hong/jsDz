"use strict";

function timerNewYear() {
  const timer = document.getElementById("time");

  const dateNow = new Date();
  const newYear = new Date(dateNow.getFullYear() + 1, 0, 1);

  function updateTimer() {
    const now = new Date();
    const diffInMs = newYear - now;

    if (diffInMs <= 0) {
      clearInterval(interval);
      timer.innerText = "🎉 С Новым годом!";
      return;
    }

    const currentMonth = now.getMonth();
    const months = 11 - currentMonth;
    const dateAfterMonths = new Date(now);
    dateAfterMonths.setMonth(dateAfterMonths.getMonth() + months);
    const remainingMs = newYear - dateAfterMonths;
    const totalSeconds = Math.floor(remainingMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const remainingSecondsAfterDays = totalSeconds % 86400;
    const hours = Math.floor(remainingSecondsAfterDays / 3600);
    const remainingSecondsAfterHours = remainingSecondsAfterDays % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const seconds = remainingSecondsAfterHours % 60;
    timer.innerText =
      `${months} месяцев, ${days} дней, ` + `${hours} часов, ${minutes} минут, ${seconds} секунд`;
  }

  updateTimer();

  const interval = setInterval(updateTimer, 1000);
}

timerNewYear();
