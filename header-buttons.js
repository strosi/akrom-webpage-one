let menuBtn = document.getElementsByClassName('menu-btn')[0];
let closeBtn = document.getElementsByClassName('close-btn')[0];
let envlBtn = document.getElementsByClassName('envelope-btn')[0];
let openedMenu = document.getElementsByClassName('opened-menu')[0];

menuBtn.onmouseenter = function () {
    hoverIn();
    setTimeout(hoverOut, 200);
}

menuBtn.onmouseover = function () {
    // openedMenu.style.right = -143 + 'vh';
    openedMenu.classList.add('menu-hint');
}

menuBtn.onmouseout = function () {
    // openedMenu.style.right = -150 + 'vh';
    openedMenu.classList.remove('menu-hint');
}

menuBtn.onclick = clickBtn;

envlBtn.onmouseover = function () {
    this.classList.add('hover-envelope-btn');
    openedMenu.classList.add('menu-hint');
}

envlBtn.onmouseout = function () {
    this.classList.remove('hover-envelope-btn');
    openedMenu.classList.remove('menu-hint');
}

envlBtn.onclick = clickBtn;

closeBtn.onclick = function () {
    this.classList.remove('active-close');
    openedMenu.classList.remove('show-menu');
};

function hoverIn() {
    menuBtn.classList.add('hovered');
}

function hoverOut() {
    menuBtn.classList.remove('hovered');
}

function hide(e) {
    // e.classList.add('hide');
    e.target.closest('div').classList.add('hide');
}

function moveMouseOut() {
    openedMenu.classList.remove('menu-hint');
}

function clickBtn() {
    closeBtn.classList.add('active-close');
    openedMenu.classList.remove('menu-hint');
    openedMenu.classList.add('show-menu');
}

function activateClose() {
    closeBtn.classList.add('active-close');
}