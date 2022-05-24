// Get the modal
const popper = document.querySelector("#myModal");
const learnMore =document.querySelector(".myBtn");

function openModal() {
  popper.style.display = "block"
}

function closeModal() {
  popper.style.display = "none"
}

function windowOnClick(event) {
  if (event.target === popper) {
     closeModal();
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closer")[0];

learnMore.addEventListener("click", openModal)
span.addEventListener("click", closeModal)
window.addEventListener("click", windowOnClick);
