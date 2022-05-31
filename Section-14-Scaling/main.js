// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    // context.scale(x, y); // Scale factors not coordinates, scale factor 1 = 100%

    // Red Rectangle
    context.fillStyle='red';
    context.fillRect(50,50, 100, 40);
    context.fill();
    
    // Scale
    context.scale(2, 2);
    context.fillStyle='blue';
    context.fillRect(50,50, 100, 40); // Same parameters but blue rectange is offset(by double) and width/height are doubled
    context.fill();
    
    // Scaling stacks
    context.scale(2, 2);
    context.fillStyle='green';
    context.fillRect(50,50, 100, 40); // Green rectangle offset and size is doubled again
    context.fill();
    
    // Scale reduce (half)
    context.scale(0.5, 0.5);
    context.fillStyle='pink'; 
    context.fillRect(50,50, 100, 40); 
    context.fill();
};
