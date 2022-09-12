const windows = window.matchMedia("(min-width: 1030px)");
const clickShareAutor = document.querySelector(".Autor__icon");
const clickShareShare = document.querySelector(".Container__icon-shareMobile");
const shoreMovile = document.querySelector(".inactive-mobile");
const shoreDesktop = document.querySelector(".inactive-desktop");
const autor = document.querySelector(".Autor");
let active;
windows.addEventListener("change", screenTest);

function screenTest(event){
    if(event.matches){
        clickShareAutor.addEventListener("click", toggleDesktopShareAutor);
        function toggleDesktopShareAutor(){
            shoreDesktop.classList.toggle("inactive-desktop");
            shoreMovile.classList.add("inactive-mobile");
            autor.classList.remove("inactive-mobile");
        }
        if(active){
            location.reload()
        }
    } else {
        clickShareAutor.addEventListener("click", toggleMobileShareAutor);
        clickShareShare.addEventListener("click", toggleMobileShareShare);
        function toggleMobileShareAutor(){
            shoreMovile.classList.toggle("inactive-mobile");
            shoreDesktop.classList.add("inactive-desktop");
            autor.classList.add("inactive-mobile");
        }
        function toggleMobileShareShare(){
            shoreMovile.classList.toggle("inactive-mobile");
            autor.classList.remove("inactive-mobile");
            active = true;
        }
    }     
}
screenTest(windows);