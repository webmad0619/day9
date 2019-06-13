// Dani Vicario - cajitaAnimada experiment (canvas)- Thu Jun 13 13:32:42 CEST 2019
const globalCompositeOperationModes = {
    "source-over": "source-over",
    "source-in": "source-in",
    "source-out": "source-out",
    "source-atop": "source-atop",
    "destination-over": "destination-over",
    "destination-in": "destination-in",
    "destination-out": "destination-out",
    "destination-atop": "destination-atop",
    "lighter": "lighter",
    "copy": "copy",
    "xor": "xor",
    "multiply": "multiply",
    "screen": "screen",
    "overlay": "overlay",
    "darken": "darken",
    "lighten": "lighten",
    "color-dodge": "color-dodge",
    "color-burn": "color-burn",
    "hard-light": "hard-light",
    "soft-light": "soft-light",
    "difference": "difference",
    "exclusion": "exclusion",
    "hue": "hue",
    "saturation": "saturation",
    "color": "color",
    "luminosity": "luminosity"
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

const squareDimensions = 100

// this holds the object position in the screen
// and has to be updated everytime we press the cursors
let dataModel = {
    x: w2 - squareDimensions/2,
    y: h2 - squareDimensions/2
}

window.onkeydown = function (e) {
    console.log(e.keyCode)

    const positionInc = 30

    switch (e.keyCode) {
        case 39: //goes to the right
            dataModel.x+=positionInc
            break;

        case 37: //goes to the left
            dataModel.x-=positionInc
            break;

        case 38: //goes up
            dataModel.y-=positionInc
            break;

        case 40: //goes down
            dataModel.y+=positionInc
            break;
    }

    // to be completed by my favourite students :)
    if (dataModel.y < -squareDimensions) {
        dataModel.y = h
    }

    paintSquare()

}

paintSquare()

function paintSquare() {
    clearScreen()

    ctx.beginPath();
    ctx.rect(dataModel.x, dataModel.y, squareDimensions, squareDimensions)
    ctx.fill();
    ctx.closePath();


}