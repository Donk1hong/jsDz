'use strict';

const promise1 = Promise.resolve(30);
const promise2 = Promise.resolve(50);
const promise3 = Promise.resolve(100);

function race(promies) {
  return new Promise((resolve, reject) => {
    for (const promise of promies) {
      promise.then((data) => resolve(data)).catch((error) => reject(error));
    }
  });
}

async function test() {
  const test = await race([promise1, promise2, promise3]);
  console.log(test);
}

test();
