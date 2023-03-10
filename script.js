const drawingArea = document.getElementsByClassName("draw-area")[0];

//function to set the drawing area size eg. 16x16 or 32x32
function setPixels(num) {
    var pixel;
    var totalColumns = "";

    pixels = num * num;

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

setPixels(16); // change to use the value from the size slider

// add event listener while hovering over element && left mouse button is clicked, change background colour of the pixel.
function paintPixel() {

}