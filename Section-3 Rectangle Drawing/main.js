window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 1200;
    canvas.height = 600;
    let context = canvas.getContext("2d")

    context.beginPath();
    context.strokeStyle='red';
    context.lineWidth=11;
    context.lineJoin='round';
    context.fillStyle ="blue"
    context.rect(20, 200, 200, 200);
    context.stroke();
    context.fill();
    
    // No border rect
    context.fillStyle='green';
    context.fillRect(300, 200, 200, 200);

    // Border only rect
    context.lineWidth=3;
    context.strokeStyle='blue';
    context.lineJoin='square';
    context.strokeRect(550, 200, 200, 200);

    // Eraser
    context.clearRect(100, 100, 200, 200);
    
    // Erase entire canvas
    context.clearRect(0, 0, 1200, 600);
    
        
    
    
    
    
}
