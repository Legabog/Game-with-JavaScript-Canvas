let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let ballradius = 20;
let posX = 20;
let posY = 20;
let speedX = 5;
let speedY = 5;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) /2;

let rightPressed =  false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	};

	if(e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	};

	if(e.keyCode == 37) {
		leftPressed = false;
	}
}

if (rightPressed) {
	paddleX += 7;
}else {
	paddleX -=7;
};

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth);
	ctx.fillSyle = "#0095dd";
	ctx.fill();
	ctx.closePath();
}

function drawBall() {
	if(posY + speedY > canvas.height) {
		speedY = -7;
	} else if(posX + speedX > canvas.width) {
		speedX = -5
	} else if(posY + speedY < 0) {
		speedY = 7;
	} else if(posX + speedX < 0) {
		speedX = 5;
	}

	if(rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX +=7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -=7;
	};

	posX += speedX;
	posY += speedY

	ctx.clearRect(0, 0, canvas.width, canvas.height );
	ctx.beginPath();
	ctx.arc(posX, posY, 20, 0, Math.PI*2, false);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
	drawPaddle();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height );

	drawBall();
	posX += speedX;
	posY += speedY;
}

setInterval(draw, 1000/30);



