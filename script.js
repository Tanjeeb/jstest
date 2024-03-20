const ball = document.getElementById('ball');
const maxX = window.innerWidth - ball.offsetWidth; //calculates the maximum horizontal position where the ball can move without going off the screen horizontal
const maxY = window.innerHeight - ball.offsetHeight;//calculates the maximum vertical position where the ball can move without going off the screen vertically
let posX = 0;
let posY = 0;
let speedX = 6;
let speedY = 6;

function moveBall() {
    posX += speedX;
    posY += speedY;

    if (posX >= maxX || posX <= 0) {
        speedX = -speedX;
    }

    if (posY >= maxY || posY <= 0) {
        speedY = -speedY;
    }

    ball.style.left = posX + 'px';
    ball.style.top = posY + 'px';

    requestAnimationFrame(moveBall); //continuously update the position of the ball
}

moveBall();