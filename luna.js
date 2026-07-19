const card = '4561-2612-1234-5467';

function luna(string) {
    const result = string
        .trim()
        .replace(/-/g, "");

    let sum = 0;

    for (let index = 0; index < result.length; index++) {
        const res = result[index];

        if (isNaN(Number(res))) return false;

        let currentNumber = Number(res);

        if (index % 2 === 0) {
            currentNumber *= 2;
        }

        if (currentNumber > 9) {
            currentNumber -= 9;
        }

        sum += currentNumber;
    }

    return sum % 10 === 0;
}

console.log(luna(card));
