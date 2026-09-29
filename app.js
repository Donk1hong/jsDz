"use strict";

function ageValidation(dateBirth) {
  if (!dateBirth) {
    return undefined;
  }

  const dateNow = new Date();
  const dateBefore = new Date(dateBirth);
  let years = dateNow.getFullYear() - dateBefore.getFullYear();

  if (dateNow.getMonth() < dateBefore.getMonth()) {
    years = years - 1;
  } else if (dateNow.getMonth() === dateBefore.getMonth()) {
    if (dateNow.getDate() < dateBefore.getDate()) {
      years = years - 1;
    }
  }

  if (years <= 14) {
    return false;
  }

  return true;
}

console.log(ageValidation("2011-9-30"));
