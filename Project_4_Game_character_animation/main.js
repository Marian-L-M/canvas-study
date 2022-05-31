// Concept one image file
// For animation a different part of the image is shown with each iteration

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    let isBackgroundLoaded = false;
    let isHeroLoaded = false;

    // Background
    const background = new Image();
    background.src ="./back.png"
    background.onload = function () {
        isBackgroundLoaded = true;
    }


    // Character
    const hero = new Image();
    hero.src = "./sprite.png";
    hero.onload = function() {
        isHeroLoaded = true;
    }

    window.requestAnimationFrame(animationLoop);

    // Cell Specifications
    const cellWidth = 256;
    const cellHeight = 256;
    let currentCell = 0;

    // Time Specifications
    let animationStart = new Date();

    // Move Specifications
    const moveAmount = 20;
    let moveX = 100;
    
    function animationLoop(){
        let animationNow = new Date();
        if (animationNow - animationStart >= 80){
            animationStart = animationNow;
            
            // Clear
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update
            currentCell++;
            currentCell %= 6; // Resets after 6 iterations
            if(moveX >= canvas.width){
                moveX = -1 * moveAmount; // Hero will reappear on the left
            } else {
                moveX += moveAmount;
            }
            
            // Draw
            if(isBackgroundLoaded){
                context.drawImage(background, 0, 0, canvas.width, canvas.height);
            }
            
            if(isHeroLoaded){
                context.drawImage(hero, currentCell * cellWidth, 0, cellWidth, cellHeight, moveX, 410, 120, 120);
            }
        }

        // Animate
        window.requestAnimationFrame(animationLoop);
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
