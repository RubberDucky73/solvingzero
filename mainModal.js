// This will open and close the modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const trigger2 = document.querySelector(".trigger2");
const closeButton = document.querySelector(".close-button");
const submit = document.querySelector(".fileButton");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
trigger2.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
submit.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);