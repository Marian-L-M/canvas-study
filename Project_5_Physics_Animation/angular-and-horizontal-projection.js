window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    const g = 0.098 // gravity;

    // Ball 1 - Horizontal project
    let ball1 = new Ball (20, 'blue');
    ball1.x = 90;
    ball1.y = 80;
    ball1.context = context;

    // Ball 2 - Angular projection
    let ball2 = new Ball (20, 'green');
    ball2.x = 90;
    ball2.y = 550;
    ball2.context = context;

    
    // Velocity ball 1
    ball1.vx = 5;
    ball1.vy = 0;
    
    // Velocity ball 2
    ball2.vx = 5;
    ball2.vy = -8;

    window.requestAnimationFrame(animationLoop);

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update ball 1
        ball1.vy += g;
        ball1.y += ball1.vy;
        ball1.x  += ball1.vx;
        
        // Update ball 2
        ball2.vy += g;
        ball2.y += ball2.vy;
        ball2.x  += ball2.vx;

        // Draw
        ball1.draw();
        ball2.draw();

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
