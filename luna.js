const card = '4561-2612-1234-5467';

function luna(string) {
    const result = string
        .trim()
        .replace(/-/g, '');

    if (result.length === 0) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let index = result.length - 1; index >= 0; index--) {
        const currentNumber = Number(result[index]);

        if (Number.isNaN(currentNumber)) {
            return false;
        }

        let processedNumber = currentNumber;

        if (shouldDouble) {
            processedNumber *= 2;

            if (processedNumber > 9) {
                processedNumber -= 9;
            }
        }

        sum += processedNumber;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

console.log(luna(card));
