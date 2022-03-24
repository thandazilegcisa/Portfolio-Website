let section = document.querySelector("section");
let text = document.querySelector(".text");
let innerText = document.querySelector(".inner-text");
let navigationSlide = document.querySelector(".navigation-section");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  section.style.clipPath = "circle( " + value + "px at center center)";

  text.style.left = 100 - value / 4 + "%";
  innerText.style.left = 100 - value / 4 + "%";

  if (value > 1050) {
    navigationSlide.classList.add("navigation-section-slide");
  }
  if (value < 1050) {
    navigationSlide.classList.remove("navigation-section-slide");
  }
})

