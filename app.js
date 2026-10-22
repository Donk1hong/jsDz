'use strict';

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      },
    );
  });
}

getLocation()
  .then((position) => {
    console.log(`Широта: ${position.coords.latitude}.`);
    console.log(`Долгота: ${position.coords.longitude}.`);
  })
  .catch((error) => console.log(error.message));
