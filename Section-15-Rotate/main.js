// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    const radian = Math.PI / 180;

    // context.rotate(radian * degree); -> rotates in clockwise direction

    // Rotate
    // context.rotate(radian * 10);
    context.rotate(radian * 50); // Will mostly disappear -> rotation point is top left of canvas (Canvas origin). 
    

    // Rectangle
    context.fillStyle='red';
    context.fillRect(250, 250, 400, 160);
    context.fill();
    
};
