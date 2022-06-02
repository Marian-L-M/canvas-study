window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    let ball = new Ball (30, 'red');
    ball.x = 100;
    ball.y = 150;
    ball.context = context;
    ball.draw();


    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball.vx = 5;
    ball.vy = 5;

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Draw
        ball.draw();

        // Animate
        window.requestAnimationFrame(animationLoop)
        
    }

    window.requestAnimationFrame = (function(){
        return window.requestAnimationFrame
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000/60);
        };
    })();
};
