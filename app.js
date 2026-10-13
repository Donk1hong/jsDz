"use strict";

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log(`${this.name}, ${this.language}`);
};

const Orc = function (race, weapon, name, language) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Character.prototype);

Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
  console.log(`Удар оружием: ${this.weapon}`);
};

const Elf = function (race, spells, name, language) {
  Character.call(this, race, name, language);
  this.spells = spells;
};

Elf.prototype = Object.create(Character.prototype);

Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
  console.log(`Создано заклинание: ${this.spells}`);
};
