const drawingArea = document.getElementsByClassName("draw-area")[0];

//function to set the drawing area size eg. 16x16 or 32x32
function setPixels(num) {
    var pixel;
    var totalColumns = "";

    pixels = num * num;

    drawingArea.replaceChildren();

    // create divs as pixel in draw-area container
    for (let i = 0; i < pixels; i++) {
        pixel = document.createElement("div");
        pixel.className = "pixel";
        drawingArea.appendChild(pixel);
    }

    for (let i = 0; i < num; i++) {
        totalColumns += "auto "
    }

    drawingArea.style.gridTemplateColumns = totalColumns;
}

var slider = document.getElementById("pixelRange");
var output = document.getElementsByClassName("grid-size")[0];
const defaultSize = 16;
slider.value = defaultSize;
setPixels(defaultSize);

// Update the current slider value (each time you drage the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value + " x " + this.value;
    // console.log(output.innerHTML);
    setPixels(this.value); // change to use the value from the size slider
}

// add event listener for a onclick of either solid/rainbow/eraser mode
let paintColour = "";
let isDrawing = false;
let isSolid = true;
let isRainbow = false;
let isEraser = false;

function getPaintColour() {
    return window.getComputedStyle(document.getElementsByClassName("colour-picker")[0], null).getPropertyValue('background-color');
}

paintColour = getPaintColour(); // set default paint colour

function setPaint(colour) {
    document.getElementsByClassName("colour-picker")[0].style.setProperty('background-color', colour, null);
    paintColour = colour;
    console.log(colour);
}

window.addEventListener("mousedown", function (e) {
    // console.log("i'm a pixel!");
    isDrawing = true;
});

drawingArea.addEventListener("mouseover", (e) => {
    if (isDrawing && isSolid) {
        e.explicitOriginalTarget.style.setProperty('background-color', paintColour, null);
    }
    if (isDrawing && isRainbow) {
        e.explicitOriginalTarget.style.setProperty('background-color', '#' + parseInt(Math.random() * 0xffffff).toString(16), null);
    }
    if (isDrawing && isEraser) {
        e.explicitOriginalTarget.style.removeProperty('background-color');
    }
});

window.addEventListener("mouseup", (e) => {
    if (isDrawing) {
        isDrawing = false;
    }
});

document.getElementsByClassName("switch-toggle")[0].addEventListener("click", (e) => {
    if (e.target.tagName !== "INPUT") return;
    // console.log(e.target.value);

    switch (e.target.value) {
        case "solid":
            isSolid = true;
            isRainbow = false;
            isEraser = false;
            break;
        case "rainbow":
            isSolid = false;
            isRainbow = true;
            isEraser = false;
            break;
        case "eraser":
            isSolid = false;
            isRainbow = false;
            isEraser = true;
            break;

        default:
            break;
    }
});

document.getElementById("clear").addEventListener("click", (e) => {
    // console.log(document.getElementsByClassName("pixel"));
    document.querySelectorAll(".pixel").forEach(node => {
        node.style.removeProperty('background-color');
    });
});