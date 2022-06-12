const indicator = document.querySelector(".indicator");
const Switch = document.querySelector(".switch");
const calculator = document.querySelectorAll(".container-calculator");
const display = document.querySelectorAll(".display");
const body = document.querySelectorAll(".body");
const keys = document.querySelectorAll(".key");
const nums = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".operators");

const html = document.querySelector("html");

let position = 1;

Switch.addEventListener("click", function () {
  switch (position) {
    case 1: {
      indicator.classList.add("go-right-1");
      indicator.classList.remove("go-left");
      position = 2;
      break;
    }
    case 2: {
      indicator.classList.add("go-right-2");
      indicator.classList.remove("go-right-1");
      position = 3;
      break;
    }
    case 3: {
      indicator.classList.add("go-left");
      indicator.classList.remove("go-right-2");
      position = 1;
      break;
    }
  }

  switch (position) {
    case 1: {
      html.classList.add("theme-1");
      html.classList.remove("theme-3");
      break;
    }
    case 2:
      html.classList.add("theme-2");
      html.classList.remove("theme-1");
      break;
    case 3:
      html.classList.add("theme-3");
      html.classList.remove("theme-2");
      break;
  }
});
