// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");
    
    // // JS style - You shouldn't do it though
    // // window.setInterval(drawRadomColoredRectangle, 1000); // Will add a random rectangle every second
    // // window.setTimeout(drawRadomColoredRectangle, 1000) // Recursive way

    let start = new Date();

    // Canvas style how you should do it
    window.requestAnimationFrame(drawRadomColoredRectangle);

    function drawRadomColoredRectangle() {

        const now = new Date();
        if(now - start >= 1000) {
            start = now;

            // Clear Canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            

            // Random Colors
            let color = createRandomRGBColor();
            let fillOpacity = Math.random();
            let fillColor = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + fillOpacity + ')';
            let borderColor = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ')';
    
            let x = getRandomInt(0, canvas.width);
            let y = getRandomInt(0, canvas.height);
            let w = getRandomInt(0, canvas.width - x);
            let h = getRandomInt(0, canvas.height - y);
    
            // Draw Rectangle
            context.beginPath();
            context.fillStyle= fillColor;
            context.strokeStyle= borderColor;
            context.rect(x, y, w, h);
            context.stroke();
            context.fill();
        }

        // Animate - callback
        window.requestAnimationFrame(drawRadomColoredRectangle);
        
    }
    function createRandomRGBColor(){
        let red = getRandomInt(0, 257);
        let green = getRandomInt(0, 257);
        let blue = getRandomInt(0, 257);
        return {r: red, g: green, b: blue};
    }
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // // Animate - JS style
    // window.setTimeout(drawRadomColoredRectangle, 1000);// Recursive way

    // Animate - Canvas style
    // Make it safe for different browsers
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
