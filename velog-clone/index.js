const history = document.querySelector(".menu__history");
const selections = document.querySelectorAll(".selection");

history.addEventListener("click", () => {
  document.querySelector(".history__selection").classList.toggle("show");
});

const colorChange = (selection) => {
  selections.forEach((e) => {
    e === selection ? (e.style.color = "red") : (e.style.color = "black");
  });
};
selections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    const content = document.querySelector(".history__content");
    content.innerText = e.currentTarget.innerText;
    colorChange(selection);
  });
});
