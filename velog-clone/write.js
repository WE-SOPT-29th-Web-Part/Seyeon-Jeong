const input = document.querySelector("input");

input.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    const div = document.createElement("div");
    div.classList.add("tag");
    div.innerHTML = e.target.value;
    div.addEventListener("click", (e) => e.currentTarget.remove());
    document.querySelector(".tag-con").append(div);
    input.value = "";
  }
});
