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



// Get the modal
const popper1 = document.querySelector("#myModalMain");
const learnMore1 =document.querySelector(".myBtn");

function openModal1() {
  popper1.style.display = "block"
}

function closeModal1() {
  popper1.style.display = "none"
}

function windowOnClick1(event) {
  if (event.target === popper1) {
     closeModal1();
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closer")[0];

learnMore1.addEventListener("click", openModal1)
span.addEventListener("click", closeModal1)
window.addEventListener("click", windowOnClick1);