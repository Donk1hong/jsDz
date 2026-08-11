"use strict";

const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const idUsers = users.map((item) => item.id);
const setUsers = new Set(idUsers);
const setUserArr = [...setUsers];
const result = setUserArr.map((id) => {
  return users.find((user) => user.id === id);
});

console.log(result);
