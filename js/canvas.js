const SQUARE_SIZE = 30;
const CANVAS_SIZE = 300;

let canvas = document.getElementById("mainCanvas");
let ctx = canvas.getContext("2d");

const drawSquare = (position, color) => {
    const [x, y] = position;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
}

const drawBigSquare = (position, color) => {
    const [x, y] = position;

    drawSquare([x, y], color);
    drawSquare([x + SQUARE_SIZE, y], color);
    drawSquare([x, y + SQUARE_SIZE], color);
    drawSquare([x + SQUARE_SIZE, y + SQUARE_SIZE], color);
}

const drawLine = (pos1, pos2, color) => {
    const [x1, y1] = pos1;
    const [x2, y2] = pos2;

    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.strokeStyle = color;
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

const drawArc = (position, r, angs, borderColor="", fillColor="") => {
    const [x, y] = position;
    const [ang1, ang2] = angs;

    ctx.beginPath();
    ctx.arc(x, y, r, ang1, ang2);
    ctx.strokeStyle = borderColor;
    ctx.fillStyle = fillColor;

    if(fillColor) ctx.fill();
    if(borderColor) ctx.stroke();
}

const writeOnCanvas = (position, text, color) => {
    const [x, y] = position;
 
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

const drawFigures = () => {
    drawBigSquare([0,0], "blue");

    drawBigSquare([CANVAS_SIZE - (SQUARE_SIZE * 2), 0], "red");
    drawBigSquare([CANVAS_SIZE/2 - SQUARE_SIZE*2, CANVAS_SIZE/2], "red");
    
    drawSquare([0, (CANVAS_SIZE /2) - SQUARE_SIZE], "cyan");
    drawSquare([0, CANVAS_SIZE /2], "cyan");
    drawSquare([CANVAS_SIZE - SQUARE_SIZE, CANVAS_SIZE/2 - SQUARE_SIZE/2], "cyan");
    
    drawSquare([0, CANVAS_SIZE - SQUARE_SIZE*2], "yellow");
    drawSquare([0, CANVAS_SIZE - SQUARE_SIZE], "yellow");
    drawSquare([0 + SQUARE_SIZE, CANVAS_SIZE - SQUARE_SIZE], "yellow");
    
    drawSquare([CANVAS_SIZE - SQUARE_SIZE, CANVAS_SIZE - SQUARE_SIZE*2], "black");
    drawSquare([CANVAS_SIZE - SQUARE_SIZE, CANVAS_SIZE - SQUARE_SIZE], "black");
    drawSquare([CANVAS_SIZE - SQUARE_SIZE*2, CANVAS_SIZE - SQUARE_SIZE], "black");

    drawLine([0,0], [CANVAS_SIZE/2, CANVAS_SIZE/2], "blue");
    drawLine([CANVAS_SIZE,0], [CANVAS_SIZE/2, CANVAS_SIZE/2], "red");
    drawLine([0, CANVAS_SIZE/2], [CANVAS_SIZE, CANVAS_SIZE/2], "green");
    drawLine([CANVAS_SIZE/2, CANVAS_SIZE/2], [CANVAS_SIZE/2, CANVAS_SIZE], "grey");

    drawArc([CANVAS_SIZE/2, CANVAS_SIZE/2], 70, [Math.PI, 0], "green");
    drawArc([CANVAS_SIZE/2, CANVAS_SIZE/2], 90, [Math.PI, Math.PI*1.25], "green");
    drawArc([CANVAS_SIZE/2, CANVAS_SIZE/2], 90, [Math.PI * 1.75, 0], "green");

    drawArc([CANVAS_SIZE/4, CANVAS_SIZE/2 + CANVAS_SIZE / 4], 15, [0, Math.PI*2], "green", "yellow");
    drawArc([CANVAS_SIZE/2 + CANVAS_SIZE/4, CANVAS_SIZE/2 + CANVAS_SIZE / 4], 15, [0, Math.PI*2], "green", "yellow");


    drawArc([CANVAS_SIZE/2, CANVAS_SIZE], 80, [Math.PI, Math.PI*1.5], "green");
    drawArc([CANVAS_SIZE/2, CANVAS_SIZE], 60, [Math.PI * 1.5, 0], "green");

    drawArc([CANVAS_SIZE/2, CANVAS_SIZE/2 - 45], 15, [0, Math.PI*2], "blue", "cyan");
    drawArc([CANVAS_SIZE/2, CANVAS_SIZE], 40, [Math.PI, 0], "green", "cyan");

    writeOnCanvas([150, 45], "Canvas", "black");
}

drawFigures();
