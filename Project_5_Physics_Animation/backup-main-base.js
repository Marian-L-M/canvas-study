window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    let ball = new Ball (20, 'green');
    ball.x = 100;
    ball.y = 250;
    ball.context = context;
    ball.draw();


    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball.vx = 1;
    ball.vy = -4;

    // Acceleration
    const ax = 0.05;
    const ay = 0.05;

    function animationLoop() {
        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update X
        ball.vx += ax;
        ball.x += ball.vx;
        
        // Update Y
        ball.vy +=  ay;
        ball.y += ball.vy;

        // Draw
        ball.draw();

        
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
};
