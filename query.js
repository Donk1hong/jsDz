"use strict";

const toDoList = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],

  addTask(task) {
    this.tasks.push(task);
    return task;
  },

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  },

  patchTask(id, task) {
    const messageFail = "Такой задачки не существует";
    const messageSuccess = "Вы успешно изменили задачку";

    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return messageFail;
    }

    this.tasks[index] = {
      ...this.tasks[index],
      ...task,
    };

    return `${messageSuccess} - ${JSON.stringify(this.tasks[index])}`;
  },

  sortByPriority() {
    return this.tasks.sort((a, b) => a.order - b.order);
  },
};

const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
};

console.log(
  toDoList.addTask.call(newTask, {
    id: 2,
    name: "Новая задача",
    description: "Описание",
    order: 2,
  }),
);

console.log(
  toDoList.addTask.call(newTask, {
    id: 3,
    name: "Срочная задача",
    description: "Сделать сегодня",
    order: 1,
  }),
);

console.log(
  toDoList.patchTask.call(newTask, 2, {
    name: "Изменённая задача",
    order: 3,
  }),
);

console.log(toDoList.sortByPriority.call(newTask));

console.log(toDoList.removeTask.call(newTask, 1));

console.log(newTask.tasks);
