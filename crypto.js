function crypto(password) {
    let mid = Math.floor(password.length / 2);

    let firstHalf = password.slice(0, mid);
    let secondHalf = password.slice(mid);

    let revFirst = firstHalf.split('').reverse().join('');
    let revSecond = secondHalf.split('').reverse().join('');

    return revFirst + revSecond;
}

function check(encrypted, password) {
    return crypto(encrypted) === password;
}

console.log(crypto('password'));
console.log(check('apssowdr', 'password'));
console.log(check('ssapdrow', 'password'));