const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext("2d");

const square = {
    color: "purple",
    height: 50,
    width: 50
}

const moveFigureTo = (figure, x, y) => {
    const isVisibleInCanvasX = x >= 0 && x < canvas.width - figure.width; 
    const isVisibleInCanvasY = y >= 0 && y < canvas.height - figure.height; 

    if (isVisibleInCanvasX && isVisibleInCanvasY) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = figure.color;
        ctx.fillRect(x, y, figure.width, figure.height)
        ctx.fill()
    }
}

canvas.addEventListener('mousemove', (e) => {
    rect = canvas.getBoundingClientRect();
    xMouse = e.clientX - rect.left;
    yMouse = e.clientY - rect.top;

    console.log(xMouse, yMouse)

    moveFigureTo(square, xMouse, yMouse)
})