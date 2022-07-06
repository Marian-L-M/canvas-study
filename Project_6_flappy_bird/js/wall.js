

function Wall(canvas) {
    // Base
    let wall = this;

    // Global Attributes
    wall.canvas = canvas;
    wall.context = wall.canvas.getContext('2d');

    // Specifications
    wall.x = canvas.width;
    wall.y = 0;
    wall.w = 100;
    wall.h = 0;
    wall.gap = 0;
    wall.color = getRandomColor();
}

Wall.prototype.draw = function() {
    // Base
    let wall = this;

    // Wall Color
    wall.context.fillStyle= wall.color;
    

    // Draw Upper Part
    wall.context.fillRect(wall.x, wall.y, wall.w, wall.h);

    // Draw Lower Part
    wall.context.fillRect(wall.x, wall.h + wall.gap, wall.w, wall.canvas.height)

    
}