alert()
const TAMANHO = 300;

let canvas = document.getElementById("main-canvas");
let ctx = canvas.getContext("2d");

function drawSquare(size, color, [x, y]) {
    console.log(size, color, x, y)
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
}

drawSquare(50, "blue", [0 , 0])
