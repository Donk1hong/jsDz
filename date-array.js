function processDates(arr) {
    return arr
        .map(item => {
            if (typeof item !== 'string') {
                return null;
            }

            let day;
            let month;
            let year;

            if (item.includes('.')) {
                const parts = item.split('.');

                if (parts.length !== 3) {
                    return null;
                }

                day = parseInt(parts[0], 10);
                month = parseInt(parts[1], 10);
                year = parseInt(parts[2], 10);
            } else if (item.includes('/')) {
                const parts = item.split('/');

                if (parts.length !== 3) {
                    return null;
                }

                day = parseInt(parts[0], 10);
                month = parseInt(parts[1], 10);
                year = parseInt(parts[2], 10);
            } else if (item.includes('-')) {
                const parts = item.split('-');

                if (parts.length !== 3) {
                    return null;
                }

                month = parseInt(parts[0], 10);
                day = parseInt(parts[1], 10);
                year = parseInt(parts[2], 10);
            } else {
                return null;
            }

            if (
                isNaN(day) ||
                isNaN(month) ||
                isNaN(year) ||
                day < 1 ||
                day > 31 ||
                month < 1 ||
                month > 12
            ) {
                return null;
            }

            const formattedDay = String(day).padStart(2, '0');
            const formattedMonth = String(month).padStart(2, '0');
            const formattedYear = String(year).padStart(2, '0');

            return `${formattedDay}.${formattedMonth}.${formattedYear}`;
        })
        .filter(item => item !== null);
}

const rawData = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

console.log(processDates(rawData));
