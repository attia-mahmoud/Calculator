const indicator = document.querySelector(".indicator");
const Switch = document.querySelector(".switch");
const calculator = document.querySelectorAll(".container-calculator");
const display = document.querySelectorAll(".display");
const body = document.querySelectorAll(".body");
const keys = document.querySelectorAll(".key");
const nums = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".operators");

const html = document.querySelector("html");

let position = localStorage.getItem("prefers-color-scheme") || 1;

Switch.addEventListener("click", function () {
  switch (position) {
    case 1: {
      indicator.classList.add("go-right-1");
      indicator.classList.remove("go-left");
      html.classList.add("theme-2");
      html.classList.remove("theme-1");
      position = 2;
      break;
    }
    case 2: {
      indicator.classList.add("go-right-2");
      indicator.classList.remove("go-right-1");
      html.classList.add("theme-3");
      html.classList.remove("theme-2");
      position = 3;
      break;
    }
    case 3: {
      indicator.classList.add("go-left");
      indicator.classList.remove("go-right-2");
      html.classList.add("theme-1");
      html.classList.remove("theme-3");
      position = 1;
      break;
    }
  }
  prefers_color_scheme();
});

function prefers_color_scheme() {
  localStorage.setItem("prefers-color-scheme", position);
}
