const lang = prompt('Введите язык в формате en, ru, de');

switch (lang ? lang.toLowerCase() : '') {
    case 'en':
        console.log('Hello!')
        break;
    case 'ru':
        console.log('Привет!')
        break;
    case 'de':
        console.log('Guten Tag!')
        break;
    default:
        console.log('Такого языка нету в базе')
        break;
}