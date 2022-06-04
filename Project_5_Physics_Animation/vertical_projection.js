window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    const g = 0.098 // gravity;

    // Ball 1
    let ball1 = new Ball (20, 'blue');
    ball1.x = 200;
    ball1.y = 80;
    ball1.context = context;
    
    // Ball 2
    let ball2 = new Ball (20, 'green');
    ball2.x = 400;
    ball2.y = 80;
    ball2.context = context;
    
    // Ball 3
    let ball3 = new Ball (20, 'red');
    ball3.x = 600;
    ball3.y = 500;
    ball3.context = context;

    window.requestAnimationFrame(animationLoop);

    // Velocity
    ball1.vy = 0;
    ball2.vy = 2;
    ball3.vy = -10;

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update ball1
        ball1.vy += g;
        ball1.y += ball1.vy;
        
        // Update ball2
        ball2.vy += g;
        ball2.y += ball2.vy;
        
        // Update ball3
        ball3.vy += g;
        ball3.y += ball3.vy;

        // Draw
        ball1.draw();
        ball2.draw();
        ball3.draw();

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
