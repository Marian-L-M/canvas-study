window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 1200;
    canvas.height = 600;
    let context = canvas.getContext("2d")

    // No easy way to build Polygons in canvas

    // Pentagon
    // Calculating each point by hand is tedious and does not scale
    // Logic: Draw a circle and place the five points
    // Formula: angle = (2*Math.Pi)/edge count
    // 1st coordinate : X = centerX + x
    // 1st coordinate : Y = centerY - y
    // 2nd coordinate : X = centerX + radius* Math.cos(alpha + angle)
    // 2nd coordinate : Y = centerY - radius* Math.sin(alpha + angle)
    // 3rd coordinate : X = centerX + radius* Math.cos(alpha + 2*angle)
    // 3rd coordinate : Y = centerY - radius* Math.sin(alpha + 2*angle)
    // 4th coordinate : X = centerX + radius* Math.cos(alpha + 3*angle)
    // 4th coordinate : Y = centerY - radius* Math.sin(alpha + 3*angle)
    // 5th coordinate : X = centerX + radius* Math.cos(alpha + 4*angle)
    // 5th coordinate : Y = centerY - radius* Math.sin(alpha + 5*angle)
    // -> 4 arguments needed: center x, center y, startAngle, radius

    //Polygon Variables

    // let sides = 12;
    // let radius = 100;
    // let centerX = 400;
    // let centerY = 300;
    // let startAngle = 200;
    // let angle = (2 *  Math.PI) / sides

    // // Start Drawing
    // context.beginPath();
    // context.strokeStyle='red';
    // context.lineWidth=5;
    // context.lineJoin='round';

    // // Begin Point Coordinates
    // let beginX = centerX + radius * Math.cos(startAngle);
    // let beginY = centerY - radius * Math.sin(startAngle);
    
    // context.moveTo(beginX, beginY);

    // // Draw Lines
    // for (let i = 1; i <= sides; i++) {
    //     // Current point coordinates
    //     let currentAngle = startAngle + i * angle;
    //     let currentPointX = centerX + radius * Math.cos(currentAngle);
    //     let currentPointY = centerY - radius * Math.sin(currentAngle);

    //     // Draw the line
    //     context.lineTo(currentPointX, currentPointY);
    // }
    // context.closePath();
    // context.stroke();
    

    drawPolygon(6, 200, 400, 400, 0, "green", 3, "round")


    // Function it up!
    function drawPolygon(sides, radius, centerX, centerY, startAngle, strokeColor, strokeWidth, lineJoin){
        let angle = (2 *  Math.PI) / sides

        // Start Drawing
        context.beginPath();
        context.strokeStyle=strokeColor;
        context.lineWidth=strokeWidth;
        context.lineJoin=lineJoin;

        // Begin Point Coordinates
        let beginX = centerX + radius * Math.cos(startAngle);
        let beginY = centerY - radius * Math.sin(startAngle);
        
        context.moveTo(beginX, beginY);

        // Draw Lines
        for (let i = 1; i <= sides; i++) {
            // Current point coordinates
            let currentAngle = startAngle + i * angle;
            let currentPointX = centerX + radius * Math.cos(currentAngle);
            let currentPointY = centerY - radius * Math.sin(currentAngle);

            // Draw the line
            context.lineTo(currentPointX, currentPointY);
        }
        context.closePath();
        context.stroke();
        }

}
      
