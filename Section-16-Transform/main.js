// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    // context.transform(a, b, c, d, e, f); -> continues from current context
    
    // 3*3 transformation matrix (Basically combines scale, rotate, translate, but complicated)

    // | m11 (horizontal scaling) m21 (vertical skewing) dx (horizontal moving)

    // | m12 (horizontal skewing) m22 (vertical sclaing) dy (vertical moving)

    // | 0                         0                      1

    // -> Transform function takes 6 parameters
    

    // context.setTransform(a, b, c, d, e, f); -> continues from initial context (Context is first resetted and then transformed)

    // context.resetTransform(); -> resets current matrix to identity matrix

    // // Red Rectangle
    // context.fillStyle='red';
    // context.fillRect(150, 150, 200, 100);
    // context.fill();
    
    // // Scale Transform 1.5x
    // context.transform(1.5, 0, 0, 1.5, 0, 0);
    
    // // Blue Rectangle
    // context.fillStyle='blue';
    // context.fillRect(150, 150, 200, 100);
    // context.fill();
    
    // // Scale Transform 1.5x
    // context.transform(1.5, 0, 0, 1.5, 0, 0);
    
    // // Green Rectangle
    // context.fillStyle='green';
    // context.fillRect(150, 150, 200, 100);
    // context.fill();
    
    // Red Rectangle
    context.fillStyle='red';
    context.fillRect(150, 150, 200, 100);
    context.fill();
    
    // Green rectangle overlaps blue one as they start from the same origin due to setTransform
    // Scale Transform 1.5x
    context.setTransform(1.5, 0, 0, 1.5, 0, 0);
    
    // Blue Rectangle
    context.fillStyle='blue';
    context.fillRect(150, 150, 200, 100);
    context.fill();
    
    // Scale Transform 1.5x
    context.setTransform(1.5, 0, 0, 1.5, 0, 0);
    
    // Green Rectangle
    context.fillStyle='green';
    context.fillRect(150, 150, 200, 100);
    context.fill();

    
    // Scale Transform 1.5x
    context.transform(1.5, 0, 0, 1.5, 0, 0);

    // reset transformation
    context.resetTransform();
    
    // Purple Rectangle -> will be drawn from the original canvas origin due to reset
    context.fillStyle='purple';
    context.fillRect(150, 150, 200, 100);
    context.fill();
    
};
