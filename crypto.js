function crypto(password) {
    return password.split('').reverse().join('');
}

function check(encrypted, password) {
    return crypto(encrypted) === password;
}

console.log(crypto('password'));
console.log(check('drowssap', 'password'));