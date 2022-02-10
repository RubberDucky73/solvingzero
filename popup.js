// Get the modal
var popper = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementsByClassName("myBtn")[1];
// console.log(btn)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closer")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   popper.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popper.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popper) {
    popper.style.display = "none";
  }
}

function myFunction() {
    popper.style.display = "block";
}