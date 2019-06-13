// Dani Vicario - cajitaAnimada experiment (canvas)- Thu Jun 13 13:32:42 CEST 2019
var img = new Image();
img.src = './supermario.jpg';
// img.height = 100
// img.width = 100

img.onload = function () {
    paintSuperMario()
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

function clearScreen() {
    ctx.clearRect(0, 0, w, h);
}

// const superMarioDimensions = randomInt(100, 200)
const superMarioDimensions = 100

// this holds the object position in the screen
// and has to be updated everytime we press the cursors
let dataModel = {
    x: w2 - superMarioDimensions / 2,
    y: h2 - superMarioDimensions / 2,
    score: 0
}


function levelUp(){
    alert("Has pasado el nivel!")
}


window.onkeydown = function (e) {
    console.log(e.keyCode)

    const positionInc = 30

    switch (e.keyCode) {
        case 39: //goes to the right
            dataModel.x += positionInc
            break;

        case 37: //goes to the left
            dataModel.x -= positionInc
            break;

        case 38: //goes up
            dataModel.y -= positionInc
            break;

        case 40: //goes down
            dataModel.y += positionInc
            break;

        case 32: //increases score
            dataModel.score += 10

            if (dataModel.score > 100) {
                levelUp()
            }
            break;
    }

    // to be completed by my favourite students :)
    if (dataModel.y < -superMarioDimensions) {
        dataModel.y = h
    }

    paintSuperMario()
}

paintSuperMario()

function paintSuperMario() {
    clearScreen()

    // color the text
    ctx.fillStyle = "orange";
    ctx.font = "30px Arial";
    // ctx.fillText("string", x, y); => x, y are coordinates where the text
    // is going to appear
    ctx.fillText(dataModel.score, 100, 100);

    ctx.drawImage(img, dataModel.x, dataModel.y, superMarioDimensions, superMarioDimensions);
}

