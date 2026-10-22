'use strict';

'use strict';

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

function errorAdd(response, errorMessage) {
  if (!response.ok) {
    throw new Error(`${errorMessage}: ${response.status}`);
  }
}

fetch(pokemonUrl)
  .then((response) => {
    errorAdd(response, 'Ошибка');
    return response.json();
  })
  .then((pokemon) => {
    const urlAbility = pokemon.abilities[0].ability.url;
    return fetch(urlAbility);
  })
  .then((response) => {
    errorAdd(response, 'Ошибка');
    return response.json();
  })
  .then((ability) => {
    const abl = ability.effect_entries.find((a) => a.language.name === 'en');
    if (!abl) {
      throw new Error('Такого языка нету');
    }
    console.log(abl.effect);
  })
  .catch((error) => console.log(error.message))
  .finally(() => console.log('Запрос завершился'));
