"use strict";

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`${this.name}, ${this.language}`);
  }
}

class Ork extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(`${this.name}, ${this.language}, ${this.weapon}`);
  }

  hit() {
    console.log(`Удар оружием: ${this.weapon}`);
  }
}

class Elf extends Character {
  constructor(race, name, language, spells) {
    super(race, name, language);
    this.spells = spells;
  }

  speak() {
    console.log(`${this.name}, ${this.language}, ${this.spells}`);
  }

  createSpell() {
    console.log(`Создано заклинание: ${this.spells}`);
  }
}

const ork = new Ork("Orc", "Kristina", "Hjup", "Sword");
ork.speak();
ork.hit();
const elf = new Elf("elf", "Ruslan", "enfis", "stick");
elf.speak();
elf.createSpell();
