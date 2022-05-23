window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d")
    
    // context.createLinearGradient(x1, y1, x2, y2);
    // context.createRadialGradient(x1, y1, r1, x2, y2, r2);

    // // Linear Gradient
    // let gradient = context.createLinearGradient(240, 40, 660, 680);
    // // add Color Stop(stop, color) -> stop is number between 0-1
    // gradient.addColorStop(0, "red");
    // gradient.addColorStop(0.25, "orange");
    // gradient.addColorStop(0.5, "green");
    // gradient.addColorStop(0.75, "purple");
    // gradient.addColorStop(1, "white");
    
    // context.strokeStyle='blue';
    // context.lineWidth=4;
    // context.fillStyle=gradient;
    // context.rect(240, 40, 420, 420);
    // context.stroke();
    // context.fill();

    // Radial Gradient
    let radialGradient = context.createRadialGradient(570, 380, 300, 570, 300, 60);
    radialGradient.addColorStop(0, "red");
    radialGradient.addColorStop(0.25, "orange");
    radialGradient.addColorStop(0.5, "green");
    radialGradient.addColorStop(0.75, "purple");
    radialGradient.addColorStop(1, "white");
    

    context.strokeStyle='blue';
    context.lineWidth=4;
    context.fillStyle=radialGradient;
    context.rect(240, 40, 420, 420);
    context.stroke();
    context.fill();
    
};
