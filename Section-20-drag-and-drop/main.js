window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");
    const boundings = canvas.getBoundingClientRect();

    // Specs
    let balls = 5;
    let ballsArr = [];
    let currentBall = []

    // Create Balls
    for(let i = 0; i < balls; i++) {
        let radius = getRandomInt(25, 50);
        let randColor = createRandomRGBColor();
        let ballColor = 'rgb(' + randColor.r + ', '+ randColor.g + ', '+ randColor.b + ')';
        let ball = new Ball(radius, ballColor);
        ball.context = context;
        ball.x = getRandomInt(radius, canvas.width - radius);
        ball.y = getRandomInt(radius, canvas.height - radius);
        ballsArr.push(ball);
    }

    drawBalls();

    function drawBalls(){
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw Balls
        for(let i = 0; i < balls; i++) {
            ballsArr[i].draw();
        }
    }

    // Loops over all balls in array to check if click area is within radius of any ball
    function isHitOnBall(mx, my) {
        for(let i = balls - 1; i >= 0; i--){
            if(Math.sqrt(Math.pow(mx - ballsArr[i].x , 2) + Math.pow(my - ballsArr[i].y , 2)) < ballsArr[i].r){
                currentBall = ballsArr[i];
                break
            }
        };
    }


    // Mouse Event Handlers
    canvas.addEventListener('mousedown', (e) => {
        let mouseDownX = e.clientX - boundings.left;
        let mouseDownY = e.clientY - boundings.top;
        isHitOnBall(mouseDownX, mouseDownY);
    });

    canvas.addEventListener('mousemove', (e) => {
        let mouseMoveX = e.clientX - boundings.left;
        let mouseMoveY = e.clientY - boundings.top;
        if(currentBall) {
            currentBall.x = mouseMoveX;
            currentBall.y = mouseMoveY;

            drawBalls();
        }
    });

    canvas.addEventListener('mouseup', (e) => {
        currentBall = null;
    });

};


function getRandomInt(min, max) {
    min  = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min)) + min)
};

function createRandomRGBColor() {
    let red = getRandomInt(0, 257);
    let green = getRandomInt(0, 257);
    let blue = getRandomInt(0, 257);
    return {r: red, g:green, b: blue};
};