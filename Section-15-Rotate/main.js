// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    // // ======== Rotate ===========
    // const radian = Math.PI / 180;
    
    // // context.rotate(radian * degree); -> rotates in clockwise direction
    
    // // Rotate
    // // context.rotate(radian * 10);
    // context.rotate(radian * 50); // Will mostly disappear -> rotation point is top left of canvas (Canvas origin). 
    
    // // To change rotation point, canvas origin neeeds to be translated
    
    
    // // Rectangle
    // context.fillStyle='red';
    // context.fillRect(250, 250, 400, 160);
    // context.fill();
    
    // // ======== Translate ===========

    // Origin Rectangle
    context.fillStyle='red';
    context.fillRect(50, 50, 160, 160);
    context.fill();
    
    // Translate Canvas
    context.translate(300, 200);

    // Translated Rectangle
    // Will not simply move the rectangle, but change the origin point of the canvas
    context.fillStyle='blue';
    context.fillRect(50, 50, 160, 160);
    context.fill();
    
};
