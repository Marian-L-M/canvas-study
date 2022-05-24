// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    let tile = new Image();
    tile.src = 'tile.png';

    tile.onload = function () {
        drawImage(tile, 0, 0, 768, 200, 60, 0, 768, 200)
    };


    window.requestAnimationFrame
};
