function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

// for(var posX = 0 ; posX < window.innerWidth ; posX+=1 ) {
//     ctx.beginPath();
//     ctx.fillStyle = `rgba(255, 255, 255, 0.7)`
//     ctx.arc(posX, h2 + 150 * Math.cos(posX * Math.PI / 180) , randomInt(1, 50),0, Math.PI * 2);
//     ctx.fill();
//     ctx.closePath();
// }

/* miri
for(var posX = 0 ; posX < 500 ; posX+=1 ) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, 0.7)`
    ctx.arc(randomInt(0, w), randomInt(0, h2), randomInt(1, 50),0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

for(var posX = 0 ; posX < 500 ; posX+=1 ) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 0, 0, 0.7)`
    ctx.arc(randomInt(0, w), randomInt(h2, h), randomInt(1, 50),0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

*/


for(var posX = 0 ; posX < 500 ; posX+=1 ) {
    ctx.beginPath();
    var randomCol = randomInt(120, 255)
    ctx.strokeStyle = `rgba(${randomCol}, ${randomCol}, ${randomCol}, 0.7)`
    ctx.arc(randomInt(0, w), randomInt(0, h), randomInt(1, 50),0, Math.PI * 2);
    ctx.lineWidth = 10
    // ctx.setLineDash([1, 5, 1])
    ctx.stroke();
    ctx.closePath();
}

// ctx.beginPath();
// ctx.arc(window.innerWidth / 2 + (circleRadius/2), window.innerHeight / 2  - (circleRadius/2), circleRadius, 0, 2 * Math.PI);
// ctx.fill();
// ctx.closePath();


