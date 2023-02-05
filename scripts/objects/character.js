let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7;

const img = new Image();
img.src = '../../resources/sprite_image/character.png';
img.onload = function() {
    init();
};

function init() {
    ctx.drawImage(img, 0, 0, 16, 18, 0 ,0, 16, 18);
}

const characterWidth = canvas.width * 0.05;
const characterHeight = characterWidth;