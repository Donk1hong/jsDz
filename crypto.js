function crypto(password) {
    let chars = password.split('');

    for (let i = 0; i < chars.length - 1; i += 2) {
        let temp = chars[i];
        chars[i] = chars[i + 1];
        chars[i + 1] = temp;
    }

    return chars.join('');
}

function check(encrypted, password) {
    let decrypted = crypto(encrypted);

    return decrypted === password;
}

console.log(crypto('password'));
console.log(check('apssowdr', 'password'));
console.log(check('ssapdorw', 'wrong'));