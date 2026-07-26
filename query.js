"use strict";

const toDoList = {
  tasks: [
    {
      title: "Помыть посуду",
      id: 1,
      priority: 1,
    },
  ],
  addTask: function (task) {
    this.tasks.push(task);
    return task;
  },
  removeTask: function (id) {
    return (this.tasks = this.tasks.filter((task) => task.id !== id));
  },
  patchTask: function (id, task) {
    const messageFail = "Такой задачки не существует";
    const messageSuccess = "Вы успешно изменили задачку";
    const index = this.tasks.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.tasks[index] = {
        ...this.tasks[index],
        ...task,
      };
      return `${messageSuccess} - ${JSON.stringify(this.tasks[index])}`;
    }

    return messageFail;
  },
  sortByPriority: function () {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

const newTask = {
  title: "Помытьcя",
  id: 2,
  priority: 2,
};

const newTask2 = {
  title: "Помытьcя сегодня",
  id: 3,
  priority: 3,
};

console.log(toDoList.addTask(newTask));
console.log(toDoList.addTask(newTask2));
console.log(toDoList.tasks);
console.log(toDoList.removeTask(2));
console.log(toDoList.tasks);
console.log(toDoList.patchTask(3, newTask));
console.log(toDoList.sortByPriority());
