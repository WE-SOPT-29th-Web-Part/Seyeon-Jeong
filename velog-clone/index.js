const history = document.querySelector(".menu__history");
const selections = document.querySelectorAll(".selection");
const mainPosts = document.querySelectorAll(".main__post");
const arrowBack = document.querySelector(".arrow-back");
const arrowForward = document.querySelector(".arrow-forward");

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
function calcCount() {
  const conWitdh = parseInt(
    getComputedStyle(document.querySelector(".main__post-con")).width,
    10
  );
  const postWitdh =
    parseInt(
      getComputedStyle(document.querySelector(".main__post")).width,
      10
    ) + 32;
  return conWitdh / postWitdh;
}
(function slider() {
  let bodyWidth = document.body.clientWidth;
  let showingCount = calcCount();
  let moving = false;
  let start = 0;
  let end = mainPosts.length;

  window.addEventListener("resize", () => {
    bodyWidth = document.body.clientWidth;
    showingCount = calcCount();
    if (end < showingCount) {
      end = showingCount;
      start = end - mainPosts.length;
    }
    slideMove("resize", bodyWidth, start);
  });
  arrowBack.addEventListener("click", () => {
    if (moving || start >= 0) return;
    moving = true;
    start++;
    end++;
    slideMove("back", bodyWidth);
    setTimeout(() => (moving = false), 500);
  });
  arrowForward.addEventListener("click", () => {
    if (moving || end <= showingCount) return;
    moving = true;
    end--;
    start--;
    slideMove("forward", bodyWidth);
    setTimeout(() => (moving = false), 500);
  });
})();
function slideMove(direction, bodyWidth, start) {
  const postLeft = `${getComputedStyle(mainPosts[0]).left}`;
  const postWidth = `(${getComputedStyle(mainPosts[0]).width} + 32px)`;
  switch (direction) {
    case "back":
      bodyWidth >= 1056
        ? moveCalc(postLeft, "+", "22rem")
        : moveCalc(postLeft, "+", postWidth);
      break;
    case "forward":
      bodyWidth >= 1056
        ? moveCalc(postLeft, "-", "22rem")
        : moveCalc(postLeft, "-", postWidth);
      break;
    case "resize":
      bodyWidth >= 1056
        ? moveCalc(start, "*", "22rem")
        : moveCalc(start, "*", postWidth);
      break;
  }
}
function moveCalc(operand1, operator, operand2) {
  mainPosts.forEach((e) => {
    e.style.left = `calc(${operand1} ${operator} ${operand2})`;
  });
}

(function darkMode() {
  let darkMode = localStorage.getItem("dark-mode");
  let checked = document.querySelector(".header__mode-check");
  const button = document.querySelector(".dark-mode-con");

  window.addEventListener("load", () => {
    if (darkMode) {
      checked.checked = true;
      document.documentElement.setAttribute("dark-mode", true);
    }
  });

  button.addEventListener("click", () => {
    darkMode
      ? localStorage.removeItem("dark-mode")
      : localStorage.setItem("dark-mode", "on");
    document.documentElement.toggleAttribute("dark-mode");
    darkMode = localStorage.getItem("dark-mode");
    checked.checked = !checked.checked;
  });
})();
