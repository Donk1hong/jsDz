function processDateValid(arr) {
    return arr
        .filter(item => typeof item === 'string' && item.trim() !== '')
        .map(dateString => {
            const parts = dateString.split('.');
            if (parts.length !== 3) return null;

            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);

            if (
                isNaN(day) || isNaN(month) || isNaN(year) ||
                day < 1 || day > 31 ||
                month < 1 || month > 12 ||
                year < 1900 || year > 2100
            ) {
                return null;
            }

            const formattedDay = String(day).padStart(2, '0');
            const formattedMonth = String(month).padStart(2, '0');

            return `${formattedDay}.${formattedMonth}.${year}`;
        })
        .filter(Boolean);
}

const rawData = ["12.05.2025", "invalid", "35.12.2023", "1.1.1990", "07.02.2026"];
console.log(processDateValid(rawData));