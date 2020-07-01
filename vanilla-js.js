const bike = document.getElementsByClassName("bike")[0];
const bikeBackground = document.getElementsByClassName("header-anim")[0];

function onScrollAnimation() {
    let windowTop = window.scrollY;
    let staticBgTop = bikeBackground.offsetTop;
    let leftMoveValue = windowTop * 3 - staticBgTop - 120;

    bike.style.left = leftMoveValue + "px";
}

window.onscroll = onScrollAnimation;
window.onload = function () { bike.style.left = "-120px" };