"use strict";

// const btns = document.getElementsByClassName("btn-container")[0].children
const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent");

for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    flexParent.style.flexDirection = event.target.dataset.flexDirection;
    for (const btn of btns) {
      btn.style.color = "";
       btn.style.backgroundColor = ""
    }
    event.target.style.backgroundColor = "#4fc2f8";
    event.target.style.color = "white";
  });
}
