//Select the hamburger menu and modal-nav-bar
let hamMenu = document.querySelector(".ham-menu-container");
let modalNavBar = document.querySelector(".modal-nav-bar");
//Select the modal
let modal = document.querySelector(".modal");
//Code for when the user clicks the hamburger menu.
hamMenu.addEventListener("click", ()=> {
    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");
    modalNavBar.classList.remove("hide-modal-nav-bar");
});

//Select the close-menu-icon
let closeMenu = document.querySelector(".close-menu-container");
//Code for when the user clicks the close menu.
closeMenu.addEventListener("click", ()=> {
    modalNavBar.classList.add("hide-modal-nav-bar");
    modal.classList.add("hide-modal");
});
