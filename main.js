
var imgObj = null;
function init() {
    imgObj = document.getElementById('btnSend');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 1200 + 'px';

}

function InitMove() {
    init();
    moveRight();
}
window.onload = InitMove;




