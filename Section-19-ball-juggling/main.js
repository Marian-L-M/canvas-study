window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    const g = 0.098 // gravity
    let mouseX = 0;
    let mouseY = 0;

    // Ball
    let ball = new Ball(25, 'blue');
    ball.x = 400;
    ball.y = 80;
    ball.context = context;

    // Mouse listener
    canvas.addEventListener('mousemove', (e) => {
        const boundings = canvas.getBoundingClientRect(); // Avoid issue that mouse position is set according to window not canvas
        mouseX = e.clientX - boundings.left;
        mouseY = e.clientY - boundings.top;
    })

    window.requestAnimationFrame(animationLoop);


    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        ball.vy += + g;
        ball.y += ball.vy;

        if (Math.sqrt(Math.pow(ball.x - mouseX, 2) + Math.pow(ball.y - mouseY, 2)) < ball.r) {
            ball.vy *= -1;
        }

        // Draw
        ball.draw();

        // Animate
        window.requestAnimationFrame(animationLoop)
    };

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
