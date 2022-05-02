window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 1200;
    canvas.height = 600;
    let context = canvas.getContext("2d")

    const radian = Math.PI / 180;

    // Shadows

    // Rectangle
    context.beginPath();
    context.strokeStyle='green';
    context.fillStyle='green';
    context.shadowColor='blue';
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.shadowBlur=5;
    context.rect(150, 100, 150, 400);
    context.stroke();
    context.fill();
    
    // Circle
    context.beginPath();
    context.strokeStyle='red';
    context.fillStyle='red';
    context.shadowColor='black';
    context.shadowOffsetX=-10;
    context.shadowOffsetY=-10;
    context.shadowBlur=5;
    context.arc(650, 300, 100, 0 * radian, 360 * radian , false);
    context.stroke();
    context.fill();
}
      
