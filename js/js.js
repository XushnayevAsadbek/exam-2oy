const elMenuBtn = document.querySelector(".js-menu-burger");
const elMenuImg = document.querySelector(".header-box__burger");
const elHeader = document.querySelector(".hidden-header");

let icon = true;

elMenuBtn.addEventListener("click", function(){
    elHeader.classList.toggle("show-header");

    if(!icon){
        elMenuImg.src = "../img/header-burger.png";

        icon = true;
    } else {
        elMenuImg.src = "../img/close-menu.svg";
        icon = false;
    }
});