const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

const dataSubmit = (e) =>{
    e.preventDefault()
    const pasword =   document.getElementById('pass').value
    const email =   document.getElementById('email').value
    toggleModal()
    const emailDomElement = document.querySelector(".email1").innerHTML = email;
    const passDomElement = document.querySelector(".pass1").innerHTML = pasword;
    console.log(emailDomElement, passDomElement)
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);