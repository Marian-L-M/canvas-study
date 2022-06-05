window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    const g = 0.098 // gravity;

    let numOfBalls = 10;
    let balls = [];

    for (let i = 0; i < numOfBalls; i++){
        let radius = getRandomInt(10, 25);
        let color = createRandomColor();
        let ball = new Ball(radius);
        ball.x = getRandomInt(radius, canvas.width - radius);
        ball.y = getRandomInt(radius, canvas.height - radius);
        ball.m = radius;
        ball.c = 'rgb('+ color.r + ',' + color.g + ',' + color.b + ')';
        ball.context = context;
        ball.vx = getRandomInt(0, 20) - 10;
        ball.vy = getRandomInt(0, 20) - 10;
        ball.draw();
        balls.push(ball);
    }
    
    window.requestAnimationFrame(animationLoop);

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        moveBalls();
        checkBallCollisions()

        // Draw
        drawBalls();

        // Animate
        window.requestAnimationFrame(animationLoop)
        
    }

    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000/60);
        };
    })();

function move(ball) {
    ball.x += ball.vx;
    ball.y += ball.vy;
    checkEdges(ball)
}

function moveBalls(){
    for(let i = 0; i < numOfBalls; i++){
        move(balls[i])
    }
}

function drawBalls(){
    for(let i = 0; i < numOfBalls; i++){
        balls[i].draw();
    }
}

function checkEdges(ball){
    if(ball.x + ball.r > canvas.width || ball.x - ball.r < 0){
        ball.vx *= -1;
    }

    if(ball.y + ball.r > canvas.height || ball.y - ball.r < 0){
        ball.vy *= -1;
    }
}

function isCollided(ball1, ball2) {
    return (Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r) &&
           (Math.abs(ball1.y - ball2.y) < ball1.r + ball2.r)
}

function checkBallCollisions() {
    for(let i = 0; i < numOfBalls; i++){
        let ball1 = balls[i];
        for(let j = i + 1; j< numOfBalls; j++){
            let ball2 = balls[j];

            if(isCollided(ball1, ball2)){
                // Horizontal velocity ball1 after collision
                let vx1 =((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m);
                vx1 += (2 * ball2.m * ball2.vx) /  (ball1.m + ball2.m);
                
                // Horizontal velocity ball2 after collision
                let vx2 =((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m);
                    vx2 += (2 * ball1.m * ball1.vx) /  (ball1.m + ball2.m);
                    
                ball1.vx =vx1;
                ball2.vx =vx2;

                // Vertical velocity ball1 after collision
                let vy1 =((ball1.m - ball2.m) * ball1.vy) / (ball1.m + ball2.m);
                vy1 += (2 * ball2.m * ball2.vy) /  (ball1.m + ball2.m);
                
                // Vertical velocity ball2 after collision
                let vy2 =((ball2.m - ball1.m) * ball2.vy) / (ball2.m + ball1.m);
                    vy2 += (2 * ball1.m * ball1.vy) /  (ball1.m + ball2.m);
                    
                ball1.vy =vy1;
                ball2.vy =vy2;
            }
        }
    }
}


// Random number generators
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomColor() {
    let red = getRandomInt(0, 257);
    let green = getRandomInt(0, 257);
    let blue = getRandomInt(0, 257);
    return {r: red, g:green, b: blue};
};
}
