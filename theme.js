const indicator = document.querySelector(".indicator");
const Switch = document.querySelector(".switch");

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
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
  }
});
