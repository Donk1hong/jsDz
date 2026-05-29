const hasLicence = true;
const age = 18;
const isDrunk = false;

const checkDriver = hasLicence && age >= 18 && !isDrunk;

console.log(checkDriver ? 'Может' : 'Не может');