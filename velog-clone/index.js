const history = document.querySelector(".menu__history");
const selections = document.querySelectorAll(".selection");
const mainPosts = document.querySelectorAll(".main__post");

history.addEventListener("click", () => {
  document.querySelector(".history__selection").classList.toggle("show");
});

const colorChange = (selection) => {
  selections.forEach((e) => {
    e === selection
      ? (e.style.color = "mediumseagreen")
      : (e.style.color = "black");
  });
};
selections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    const content = document.querySelector(".history__content");
    content.innerText = e.currentTarget.innerText;
    colorChange(selection);
  });
});

mainPosts.forEach((mainPost) => {
  mainPost.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    console.log(mainPost.cloneNode(true));
    modal.append(mainPost.cloneNode(true));
    modal.addEventListener("click", (e) => e.currentTarget.remove());
    document.body.append(modal);
  });
});
