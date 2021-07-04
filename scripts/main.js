//Night Mode
const toggleDarkMode = document.querySelector(".switch-container");
const body = document.querySelector("body");
const date = new Date();
const hours = date.getHours();
const night = hours >= 19 || hours <= 7; // between 7pm and 7am

if (night) {
  body.classList.add("night");
  toggleDarkMode.classList.add("active");
}

toggleDarkMode.addEventListener("click", () => {
  if (toggleDarkMode.classList.toggle("active")) {
    body.classList.add("night");
  } else {
    body.classList.remove("night");
  }
});
//Night Mode End

//Scroll To Top
const topBtn = document.querySelector(".top");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
//Scroll To Top End

// Patricles
particlesJS.load("particles-js", "./scripts/particles.json", function () {});
