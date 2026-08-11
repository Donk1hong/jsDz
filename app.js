"use strict";

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";
let globalActiveHabbitId = undefined;

//page
const page = {
  menu: document.querySelector(".menu__list"),
  header: {
    h1: document.querySelector("h1"),
    progressPercent: document.querySelector(".percent"),
    progressTrack: document.querySelector(".progress__track"),
  },
  content: {
    dayContainer: document.querySelector(".days"),
    nextDay: document.querySelector(".day__number"),
  },
  popup: {
    modal: document.querySelector(".modal"),
    iconField: document.querySelector(".habit-form input[name='icon']"),
  },
};

// util
function loadData() {
  const habbitArray = JSON.parse(localStorage.getItem(HABBIT_KEY));
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

//render
function rerenderMenu(activeHabbit) {
  if (!activeHabbit) {
    return;
  }

  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);

    if (!existed) {
      const element = document.createElement("button");
      element.setAttribute("menu-habbit-id", habbit.id);
      element.classList.add("menu__item");
      element.addEventListener("click", () => {
        rerender(habbit.id);
      });
      element.innerHTML = `<img src="icon/${habbit.icon}.svg" alt="${habbit.name}"/>`;
      if (activeHabbit.id === habbit.id) {
        element.classList.add("menu__item--active");
      }
      page.menu.appendChild(element);
      continue;
    }

    if (activeHabbit.id === habbit.id) {
      existed.classList.add("menu__item--active");
    } else {
      existed.classList.remove("menu__item--active");
    }
  }
}

function rerenderHead(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  page.header.h1.innerText = activeHabbit.name;
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : (activeHabbit.days.length / activeHabbit.target) * 100;
  page.header.progressPercent.innerText = progress.toFixed(0) + "%";
  page.header.progressTrack.setAttribute("style", `width: ${progress}%`);
}

function rerenderContent(activeHabbit) {
  if (!activeHabbit) {
    return;
  }
  page.content.dayContainer.innerHTML = "";
  for (const index in activeHabbit.days) {
    const element = document.createElement("article");
    element.classList.add("day");
    element.innerHTML = `<div class="day__number">День ${Number(index) + 1}</div>
      <p class="day__text">${activeHabbit.days[index].comment}</p>
    <button class="delete" onclick="deleteDay(${index})" type="button" aria-label="Удалить запись">
      <img src="icon/trash.svg" alt="Мусорка" />
    </button>`;
    page.content.dayContainer.appendChild(element);
  }
  page.content.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;
}

function validateForm(form, inputs) {
  const data = new FormData(form);
  const result = {};
  for (const input of inputs) {
    form[input].classList.remove("error");
    const value = data.get(input);
    if (!value) {
      form[input].classList.add("error");
      return;
    }
    result[input] = value;
  }

  return result;
}

function addDays(event) {
  event.preventDefault();
  const form = event.target;
  const data = validateForm(form, ["comment"]);
  if (!data) {
    return;
  }
  form["comment"].value = "";
  habbits = habbits.map((habbit) => {
    if (habbit.id !== globalActiveHabbitId) {
      return habbit;
    }

    return {
      ...habbit,
      days: habbit.days.concat({
        comment: data.comment,
      }),
    };
  });
  rerender(globalActiveHabbitId);
  saveData();
}

function deleteDay(index) {
  habbits = habbits.map((habbit) => {
    if (habbit.id === globalActiveHabbitId) {
      habbit.days.splice(index, 1);
      return {
        ...habbit,
        days: habbit.days,
      };
    }
    return habbit;
  });
  rerender(globalActiveHabbitId);
  saveData();
}

function togglePopup() {
  page.popup.modal.classList.toggle("modalHidden");
}

function maxId(array) {
  const sum = array.reduce((acc, value) => {
    return Math.max(acc, value.id);
  }, 0);

  return sum;
}

function addHabit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = validateForm(form, ["name", "target"]);
  if (!data) {
    return;
  }
  const icon = formData.get("icon") || "water";

  const id = maxId(habbits) + 1;

  habbits.push({
    id: id,
    icon: icon,
    name: data.name,
    target: data.target,
    days: [],
  });

  rerender(id);
  saveData();
  togglePopup();
  form.reset();
}

function rerender(activeHabbitId) {
  globalActiveHabbitId = activeHabbitId;
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  if (!activeHabbit) {
    return;
  }

  document.location.replace(document.location.pathname + "#" + activeHabbitId);

  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
}

// working with habbits
function setIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcons = document.querySelector(".icon-picker__item--selected");
  activeIcons.classList.remove("icon-picker__item--selected");
  context.classList.add("icon-picker__item--selected");
}

(() => {
  loadData();
  if (habbits.length) {
    const hashId = Number(document.location.hash.replace("#", ""));
    const urlHabit = habbits.find((habbit) => habbit.id === hashId);
    if (urlHabit) {
      rerender(urlHabit.id);
    } else {
      rerender(habbits[0].id);
    }
  }
})();
