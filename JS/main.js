const clickShare = document.querySelector(".icon");
const menuShare = document.querySelector(".inactive");

clickShare.addEventListener("click", toggleDesktopShare);

function toggleDesktopShare (){
    menuShare.classList.toggle("inactive");
}