'use strict';

const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';
const request = new XMLHttpRequest();
request.open('GET', URL);

request.addEventListener('load', function () {
  if (this.status !== 200) {
    console.log(`Ошибка запроса, статус: ${this.status}`);
    return;
  }

  try {
    const data = JSON.parse(this.responseText);
    const ability = data.abilities[0].ability.url;

    const request = new XMLHttpRequest();
    request.open('GET', ability);
    request.addEventListener('load', function () {
      if (this.status !== 200) {
        console.log(`Ошибка запроса, статус: ${this.status}`);
        return;
      }

      try {
        const data = JSON.parse(this.responseText);
        const lang = data.effect_entries.find((a) => a.language.name === 'en');

        if (!lang) {
          console.log('Такого языка нету');
          return;
        }

        console.log(lang.effect);
      } catch (error) {
        console.log('Ошибка разбора ответа');
        return;
      }
    });

    request.send();
  } catch (error) {
    console.log('Ошибка разбора ответа');
    return;
  }
});

request.send();
