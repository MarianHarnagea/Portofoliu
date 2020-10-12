//Night Mode
const switchBtn = document.querySelector(".switch-container");
const body = document.querySelector("body");
const d = new Date();
const hours = d.getHours();
const night = hours >= 19 || hours <= 7; // between 7pm and 7am

if (night) {
  body.classList.add("night");
  switchBtn.classList.add("active");
}

switchBtn.addEventListener("click", () => {
  if (switchBtn.classList.toggle("active")) {
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
