// Concept one image file
// For animation a different part of the image is shown with each iteration

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    let tile = new Image();
    tile.src = 'tile.png';

    tile.onload = function () {
        context.drawImage(tile, 0, 0, 768, 200, 60, 0, 768, 200)
        
    };

    let cellWidth = 192;
    let cellHeight = 200;


    function drawTileCell(index) {
        context.drawImage(tile, index * cellWidth, 0, cellWidth, cellHeight, 360, 300,cellWidth, cellHeight);
        
    }
    window.requestAnimationFrame(animationLoop);

    let cell = 0; 
    let start = new Date();

    // For stability it might be smarter to put animation loop into tile.onload
    function animationLoop(){
        let now = new Date();
        if(now - start >= 150){
            start = now;
            
            // Clear
            context.clearRect(0, 200, canvas.width, canvas.height - 200);
            
            // Update cell number
            cell++;
            cell %= 4;
            
            // Draw
            drawTileCell(cell)
        }
            
        //Animate
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
