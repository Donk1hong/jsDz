function convertCurrency(amount, fromCurrency, toCurrency) {
    const rates = {
        'руб': 1,
        '$': 85,
        '€': 92
    };

    if (!rates[fromCurrency] || !rates[toCurrency]) {
        return null;
    }

    const amountInRoubles = amount * rates[fromCurrency];
    const rawResult = amountInRoubles / rates[toCurrency];
    return Number(rawResult.toFixed(2));
}

console.log(convertCurrency(1000, 'руб', '$'))