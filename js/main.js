const canvas = document.getElementById('field');
canvas.width = 1200;
canvas.height = 640;

let ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = '2';
let is_drawing = false;

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);


function start(event) {
    is_drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
    event.preventDefault();
    console.log("X", event.screenX);
    console.log("Y", event.screenY);
}

function draw(event) {
    if (is_drawing) {
        ctx.lineTo(event.clientX, event.clientY);
        ctx.strokeStyle = draw_color;
        ctx.lineWidth = draw_width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
}

function stop(event) {
    if (is_drawing) {
        ctx.stroke();
        ctx.closePath();
        is_drawing = false;
    }
    event.preventDefault();
}