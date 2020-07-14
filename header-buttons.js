let menuBtn = document.getElementsByClassName('menu-btn')[0];
let closeBtn = document.getElementsByClassName('close-btn')[0];
let envlBtn = document.getElementsByClassName('envelope-btn')[0];
let openedMenu = document.getElementsByClassName('opened-menu')[0];

menuBtn.onmouseenter = function() {
    hoverIn();
    setTimeout(hoverOut, 200);
};

menuBtn.onmouseover = menuHintOn;

menuBtn.onmouseout = menuHintOff;

menuBtn.onclick = clickBtn;

envlBtn.onmouseover = function() {
    this.classList.add('shake-envelope');
    menuHintOn();
};

envlBtn.onmouseout = function() {
    this.classList.remove('shake-envelope');
    menuHintOff();
};

envlBtn.onclick = clickBtn;

closeBtn.onclick = function() {
    this.classList.remove('active-close');
    openedMenu.classList.remove('show-menu');
};

function hoverIn() {
    menuBtn.classList.add('hovered');
};

function hoverOut() {
    menuBtn.classList.remove('hovered');
};

function hide(e) {
    // e.classList.add('hide');
    e.target.closest('div').classList.add('hide');
};

function menuHintOn() {
    openedMenu.classList.add('menu-hint');
};

function menuHintOff() {
    openedMenu.classList.remove('menu-hint');
};

function clickBtn() {
    closeBtn.classList.add('active-close');
    openedMenu.classList.remove('menu-hint');
    openedMenu.classList.add('show-menu');
};

function activateClose() {
    closeBtn.classList.add('active-close');
};