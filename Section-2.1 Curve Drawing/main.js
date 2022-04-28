window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 600;
    canvas.height = 300;
    let context = canvas.getContext("2d")

    var radian = Math.PI/180;
    
    // // Lesson 10
    // // arc(x,y, radius, startAngle, endAngle, counterClockWise(Boolean))

    // // Arc 180deg downward
    // context.beginPath();
    // context.strokeStyle = "blue";
    // context.lineWidth=10;
    // context.arc(100, 100, 50, 0 * radian, 180 * radian, false);
    // context.stroke();

    // // Arc 85deg downward
    // context.beginPath();
    // context.strokeStyle = "red";
    // context.lineWidth=10;
    // context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
    // context.stroke();

    // // Arc 180 deg upward
    // context.beginPath();
    // context.strokeStyle = "green";
    // context.lineWidth=10;
    // context.arc(500, 100, 50, 45 * radian, 130 * radian, true);
    // context.stroke();

    // // Lesson 11 Quadratic Curves
    // // context.quadraticCurveTo(controlX, controlY, endX, endY);
    // // Control -> control point (imagine like the triangle when drawing a triangle in photoshop)
    // // Forms a triangle between startpoint control point and endpoint. 
    // // Takes the middle points of the lines between start-control and end-control.
    // // Connect the middle points with a line and takes the middle point (m2) of this line
    // // m2 is the peak point of the curve -> method flattens out curve and enables to skew the curve in certain directions

    // context.beginPath();
    // context.strokeStyle='red';
    // context.lineWidth=10;
    // context.moveTo(200, 250);
    // context.quadraticCurveTo(100, 50, 400, 250);
    // context.stroke();
    
    // Lesson 12 Bezier Curve (custom curves)
    // /w two control points -> not two triangles but one rectangle
    // Three middle points: start-cp1, cp1-cp2, end-cp-2
    // Two m2 -> between mp1-mp2, mp2-mp3
    // Can e.g. create bulgy circles or wave lines
    // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

    context.beginPath();
    context.strokeStyle='red';
    context.lineWidth=10;
    context.moveTo(200, 250);
    // context.bezierCurveTo(100, 100, 500, 100, 400, 250);
    context.bezierCurveTo(350, -50, 50, 150, 400, 250);
    
    context.stroke();
    
    
    
    

    
    
    
    
    
    
    
    
}
