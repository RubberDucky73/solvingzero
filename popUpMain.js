// Get the modal on the main page
const popper1 = document.querySelector("#myModalMain");
const learnMore = document.querySelector(".myBtn1");

function openModal() {
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
var span1 = document.getElementsByClassName("closer")[0];

learnMore.addEventListener("click", openModal)
span1.addEventListener("click", closeModal1)
window.addEventListener("click", windowOnClick1);