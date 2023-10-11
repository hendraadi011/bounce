const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//membuat rectangle
// ctx.fillStyle = 'pink';
// ctx.strokeStyle = '#999';
// ctx.lineWidth = '5';


// ctx.rect(50, 50, 300, 300)
// ctx.fill();
// ctx.stroke();


// // membuat lingkaran circle

// ctx.fillStyle = 'lightgreen';
// ctx.beginPath();
// ctx.arc(550, 200, 150, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();


// //membuat segita

// ctx.fillStyle = 'lightblue';
// ctx.beginPath();
// ctx.moveTo(900,50);
// ctx.lineTo(1050, 350);
// ctx.lineTo(750, 350);
// ctx.arc(900,30,20,0, 2 * Math.PI)
// ctx.closePath();
// ctx.fill();
// ctx.stroke();



let x = 300;
let y = 200;
let speedX = 5;
let speedY = 5;
const radius = 70;

const draw = () => {
window.requestAnimationFrame(draw);
ctx.clearRect(0,0, innerWidth,innerHeight);

ctx.fillStyle = 'lightgreen';
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();


if(x + radius> innerWidth || x - radius < 0)
{
    speedX = -speedX;
}

if(y + radius > innerHeight || y - radius < 0)
{
    speedY = -speedY
}

x += speedX;
y += speedY;

}

draw();

