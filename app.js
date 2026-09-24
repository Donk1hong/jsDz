"use strict";

function boardGames(dice) {
  if (!dice) {
    console.log("Вы не передали значение!");
    return undefined;
  }
  const cubes = ["d4", "d6", "d8", "d10", "d12", "d16", "d20"];
  const finCube = cubes.find((cube) => cube === dice);
  if (!finCube) {
    console.log("Такого кубика не существует");
    return undefined;
  }
  const cubeConversion = Number.parseInt(dice.slice(1));
  const randomFace = Math.floor(Math.random() * (cubeConversion - 1 + 1) + 1);
  console.log(randomFace);
  return randomFace;
}

boardGames("d20");
