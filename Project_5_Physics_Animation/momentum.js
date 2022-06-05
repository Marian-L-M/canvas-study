window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    const g = 0.098 // gravity;

    // Large Ball
    let ball1 = new Ball (50, 'blue');
    ball1.x = 290;
    ball1.y = 250;
    ball1.m = 10;
    ball1.context = context;
    
    // Small Ball
    let ball2 = new Ball (30, 'green');
    ball2.x = 800;
    ball2.y = 250;
    ball2.m = 6;
    ball2.context = context;

    // Velocity
    ball1.vx = 6;
    ball2.vx = -7;
    
    window.requestAnimationFrame(animationLoop);

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        ball1.x += ball1.vx;
        ball2.x += ball2.vx;

        // Detect Edge Collisions
        if(ball1.x + ball1.r > canvas.width || ball1.x - ball1.r < 0){
            ball1.vx *= -1;
        }

        if(ball2.x + ball2.r > canvas.width || ball2.x - ball2.r < 0){
            ball2.vx *= -1;
        }

        // Detect Ball Collisions
        if(Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r){
            // Momentum equation
            let v1 =((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m);
                v1 += (2 * ball2.m * ball2.vx) /  (ball1.m + ball2.m);
               
            let v2 =((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m);
                v2 += (2 * ball1.m * ball1.vx) /  (ball1.m + ball2.m);
                
            ball1.vx =v1;
            ball2.vx =v2;
        } 

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
