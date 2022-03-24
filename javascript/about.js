

function revealText() {
  let secondSectionText = document.querySelector(".section-two-container");

  let secondPos = secondSectionText.getBoundingClientRect().top;
  let screenPos = window.innerHeight;

  if (
    secondPos < screenPos 
  ) {
    secondSectionText.classList.add("section-appear");
  }
  if (
    secondPos > screenPos 
  ) {
    secondSectionText.classList.remove("section-appear");
  }
}

window.addEventListener("scroll", revealText);
