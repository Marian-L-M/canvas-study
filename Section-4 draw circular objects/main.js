window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 1200;
    canvas.height = 600;
    let context = canvas.getContext("2d")

    const radian = Math.PI / 180;

    // context.beginPath();
    // context.strokeStyle='red';
    // context.fillStyle='orange';
    // context.lineWidth=15;
    // context.arc(450, 300, 150, 135 * radian, 360 * radian, false);
    // context.stroke();
    // context.fill();
    
    // Draw Pacman - Body
    context.beginPath();
    context.strokeStyle='orange';
    context.fillStyle='orange';
    context.lineWidth=10;
    context.moveTo(250, 250);
    context.lineTo(330, 310);
    context.arc(250, 250,100, 37 * radian, 323 * radian, false);
    context.lineTo(250, 250);
    context.stroke();
    context.fill();

    // Eye
    context.beginPath();
    context.fillStyle='black';
    context.arc(250, 200, 10, 0 * radian, 360 *radian, false);
    context.stroke();
    context.fill();
    
    // Alternative Pacman drawing
    context.beginPath();
    context.strokeStyle='orange';
    context.lineWidth=10;
    context.fillStyle='orange';
    context.arc(600, 250, 100, 143 * radian, 323 * radian, false);
    context.stroke();
    context.fill();

    context.beginPath();
    context.strokeStyle='orange';
    context.lineWidth=10;
    context.fillStyle='orange';
    context.arc(600, 250, 100, 37 * radian, 217 * radian, false);
    context.stroke();
    context.fill();
    
    // Eye
    context.beginPath();
    context.fillStyle='black';
    context.arc(600, 200, 10, 0 * radian, 360 *radian, false);
    context.stroke();
    context.fill();
}
      
