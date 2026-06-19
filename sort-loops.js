function filterArray(arr, removeFn) {
    return arr.filter(item => !removeFn(item));
}

const numbers = [1, 2, 3, 4];
const isRemoved = (num) => num % 2 === 0;

const result = filterArray(numbers, isRemoved);
console.log(result);
