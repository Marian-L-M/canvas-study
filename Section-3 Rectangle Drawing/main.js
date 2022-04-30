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
    

}
