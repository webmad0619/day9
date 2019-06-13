// Dani Vicario - index4 experiment (canvas)- Thu Jun 13 12:08:02 CEST 2019
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

// Array(360).fill().map(x => ({
//     w: 300 + randomInt(0, 100),
//     h: 100
// }))

class PollutionElement {
    constructor(idx) {
        this.w = randomInt(100, 300) //for Gabri :) 10 + idx * .9
        this.h = 100
    }
}

class PollutionInfographics {
    constructor(initX, initY) {
        this.initX = initX
        this.initY = initY
        this.dataModel = Array(360).fill().map((x, idx) => new PollutionElement(idx))
    }

    draw() {
        ctx.fillStyle = `rgb(0, 0, 0, 1)`
        ctx.strokeStyle = `rgb(0, 0, 255, 1)`
        for (var i = 0; i < this.dataModel.length; i += 1) {
            ctx.save();
            ctx.translate(this.initX, this.initY)
            ctx.rotate(i)
            ctx.beginPath();
            ctx.rect(0, 0, this.dataModel[i].w, 1)
            // ctx.stroke();
            ctx.fill();
            ctx.closePath();


            ctx.restore();
        }
    }

    drawWithAnimation() {
        ctx.fillStyle = `rgb(0, 0, 0, 1)`
        ctx.strokeStyle = `rgb(0, 0, 255, 1)`

        let i = 0;

        setInterval(() => {
            i++;
            ctx.save();
            ctx.translate(this.initX, this.initY)
            ctx.rotate(i)
            ctx.beginPath();
            ctx.rect(0, 0, this.dataModel[i].w, 1)
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        }, 10)
    }
}

// ctx.translate(w2, h2)
for (var i = 0 ; i < w ; i+=200) {
    new PollutionInfographics(i, h2).drawWithAnimation()
}

