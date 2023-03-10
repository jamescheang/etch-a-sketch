const drawingArea = document.getElementsByClassName("draw-area")[0];

//function to set the drawing area size eg. 16x16 or 32x32
function setPixels(num) {
    var pixel;

    pixels = num * num;

    // create divs as pixel in draw-area container
    for (let i = 0; i < pixels; i++) {
        pixel = document.createElement("div");
        pixel.className = "pixel";
        drawingArea.appendChild(pixel);
    }
}

setPixels(3);