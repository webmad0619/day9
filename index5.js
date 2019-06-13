// Dani Vicario - index5 experiment (canvas)- Thu Jun 13 13:11:57 CEST 2019
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

// for (var i = 0; i < 500; i+=10) {
//     ctx.moveTo(200, 200)
//     ctx.lineTo(400, 400 + i)
//     ctx.stroke()
// }

class Snail {
    constructor(x, y) {
        ctx.translate(x,y)

        var i = 0;

        

        var intervalID = setInterval(() => {
            ctx.beginPath()

            i += .1
            // miri
            // ctx.strokeStyle = `rgb(${i}, 0 ,0)`

            ctx.strokeStyle = `hsl(${i}, 30%, 50%)`
            ctx.moveTo(0, 0)
            ctx.lineTo((100 + i / 5) * Math.cos(i * Math.PI / 180), (100 + i / 5) * Math.sin(i * Math.PI / 180))
            ctx.stroke();

            ctx.closePath()

            if (i > 360 * 1) {
                clearInterval(intervalID)
            }
        }, 10)
    }
}

new Snail(w2, h2)