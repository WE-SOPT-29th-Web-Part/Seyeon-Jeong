const todayAddBtn = document.querySelector(".todos__today  .todos__add");
const tomorrowAddBtn = document.querySelector(".todos__tomorrow .todos__add");

const delBtn = document.querySelectorAll(".todos__delete");

const todayInput = document.querySelector(".todos__today .todos__input");
const tomorrowInput = document.querySelector(".todos__tomorrow .todos__input");

const showToday = document.querySelector(".options__today");
const showTomorrow = document.querySelector(".options__tomorrow");
const showBoth = document.querySelector(".options__both");

const toDosTemplete = `
<li class="todos__item">
  <span class="todos__name">(__replace__)</span>
  <button class="todos__delete">␡</button>
</li>
`;
const addItem = (when, input) => {
  const newTodosItem = toDosTemplete.replace("(__replace__)", input.value);
  const toDosItems = document.querySelector(`.todos__${when} .todos__items`);

  toDosItems.insertAdjacentHTML("beforeend", newTodosItem);
  toDosItems.lastElementChild
    .querySelector(".todos__delete")
    .addEventListener("click", (e) => {
      e.currentTarget.parentNode.remove();
    });
  input.value = "";
};
todayAddBtn.addEventListener("click", () => {
  addItem("today", todayInput);
});
tomorrowAddBtn.addEventListener("click", () => {
  addItem("tomorrow", tomorrowInput);
});
todayInput.addEventListener("keydown", (e) => {
  if (e.keyCode == "13") addItem("today", todayInput);
});
tomorrowInput.addEventListener("keydown", (e) => {
  if (e.keyCode == "13") addItem("tomorrow", tomorrowInput);
});

const controlLayout = (width1, width2, pad1, pad2) => {
  document.querySelector(".todos__today").style.width = `${width1}%`;
  document.querySelector(".todos__tomorrow").style.width = `${width2}%`;
  document.querySelector(".todos__today").style.padding = `${pad1}`;
  document.querySelector(".todos__tomorrow").style.padding = `${pad2}`;
};

showToday.addEventListener("click", () => {
  controlLayout(100, 0, "", 0);
});
showTomorrow.addEventListener("click", () => {
  controlLayout(0, 100, 0, "");
});
showBoth.addEventListener("click", () => {
  controlLayout(50, 50, "", "");
});

delBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });
});
