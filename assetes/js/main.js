"use strict";

const btnsColor = document.querySelectorAll(".btn-color>button");
const borders = document.querySelectorAll(".border");
const childs = document.querySelectorAll(".child");

for (const btnColor of btnsColor) {
  btnColor.addEventListener("click", (event) => {
    
    if (event.target.dataset.btnBackgroundColor === "") {
      for (const btn123 of arrBtn.flat()) {
        btn123.style.color = "";
        btn123.style.backgroundColor = ""
        btn123.style.borderColor = event.target.dataset.btnBackgroundColor;
      }
      for (const border of borders) {
        border.style.borderColor = event.target.dataset.btnBackgroundColor;
      }
      for (const child of childs) {
        child.style.color = "";
        child.style.backgroundColor = event.target.dataset.btnBackgroundColor;
      }
      changeСolorEveryone(btnsColor, event.target);
      return;
    }
    for (const btn123 of arrBtn.flat()) {
      btn123.style.color = event.target.dataset.btnColor;
      btn123.style.backgroundColor = event.target.dataset.btnBackgroundColor;
      btn123.style.borderColor = event.target.dataset.btnColor;
    }
    for (const border of borders) {
      border.style.borderColor = event.target.dataset.btnColor;
    }
    for (const child of childs) {
      child.style.color = event.target.dataset.btnColor;
      child.style.backgroundColor = event.target.dataset.btnBackgroundColor;
    }
    changeСolorEveryone(btnsColor, event.target);
  });
}
// console.log(array12);

function changeСolorEveryone(arr, btnClick) {
  const color = btnClick.style.color;
  const backgroundColor = btnClick.style.backgroundColor;

  if (color === "") {
    for (const btn of arr) {
      btn.style.color = "";
      btn.style.backgroundColor = "";
    }
    btnClick.style.backgroundColor = "#4fc2f8";
    btnClick.style.color = "white";
    return;
  }

  for (const btn of arr) {
    btn.style.color = color;
    btn.style.backgroundColor = backgroundColor;
  }
  btnClick.style.backgroundColor = color;
  btnClick.style.color = backgroundColor;
}
// const btns = document.getElementsByClassName("btn-container")[0].children

const btns = document.querySelectorAll(".btn-container>button");
const [flexParent] = document.getElementsByClassName("flex-parent-direction");

for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    flexParent.style.flexDirection = event.target.dataset.flexDirection;
    changeСolorEveryone(btns, event.target);
  });
}

const btns2 = document.querySelectorAll(".btn-container-wrap>button");
const flexParentWrap = document.querySelector(".flex-parent-wrap");

for (const btn2 of btns2) {
  btn2.addEventListener("click", (event) => {
    flexParentWrap.style.flexWrap = event.target.dataset.flexWrap;
    changeСolorEveryone(btns2, event.target);
  });
}

const btns3 = document.querySelectorAll(
  ".btn-container-justify-content>button"
);
const flexParentJustifyContent = document.querySelector(
  ".flex-parent-justify-content"
);

for (const btn3 of btns3) {
  btn3.addEventListener("click", (event) => {
    flexParentJustifyContent.style.justifyContent =
      event.target.dataset.flexJustifyContent;
    changeСolorEveryone(btns3, event.target);
  });
}

const arrBtn = [[...btns], [...btns2], [...btns3], [...btnsColor]];
// console.log(arrBtn.flat());
