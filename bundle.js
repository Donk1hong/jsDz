(function () {
  'use strict';

  class Task {
    #message;
    constructor(message) {
      this.#message = message;
    }

    run() {
      console.log(this.#message);
    }
  }

  class User {
    #task;
    constructor(task) {
      this.#task = task;
    }

    do() {
      return this.#task.run();
    }
  }

  const task = new Task('Hello');
  const user = new User(task);
  user.do();

})();
