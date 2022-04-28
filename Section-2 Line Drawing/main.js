window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 600;
    canvas.height = 300;
    let context = canvas.getContext("2d")

    // // Lesson1 - Draw line steps
    // context.beginPath(); // Reset context state (error prevention)
    // context.strokeStyle='red';
    // context.lineWidth=10;
    // context.moveTo(30, 70);
    // context.lineTo(130, 70);
    // context.stroke();
    
    // // Lesson2.1 - Complex lines (Manual)
    // context.beginPath(); 
    // context.moveTo(30, 30);
    // context.lineTo(80, 80);
    // context.lineTo(130, 30);
    // context.lineTo(180, 80);
    // context.lineTo(230, 30);
    // context.lineTo(280, 80);
    // context.stroke();

    // // Lesson3 - Line caps
    //     // Line Caps -> context.lineCap = "";
    //     // - butt (default)
    //     // - round
    //     // - square

    // // Default line
    // context.beginPath(); 
    // context.strokeStyle='red';
    // context.lineCap = "butt"; // No difference
    // context.lineWidth=10;
    // context.moveTo(100,100);
    // context.lineTo(300,100);
    // context.stroke();
    
    
    // // Rounded end line
    // context.beginPath(); 
    // context.strokeStyle='blue';
    // context.lineCap = "round"; // Rounded endings added to line ends. r = lineWidth/2
    // context.lineWidth=10;
    // context.moveTo(100, 125);
    // context.lineTo(300, 125);
    // context.stroke();
    
    // // Square end line
    // context.beginPath(); 
    // context.strokeStyle='green';
    // context.lineCap = "square"; // Looks simialr to butt, but square is added to ends(width/height = lineWidth/2) 
    // context.lineWidth=10;
    // context.moveTo(100, 150);
    // context.lineTo(300, 150);
    // context.stroke();

    // // Lesson4 - Line join
    //     // miter (default)
    //     // bevel
    //     // round

    // // Default Line Join
    // context.beginPath();
    // context.lineWidth = 20;
    // context.lineJoin='miter';
    // context.moveTo(30, 30);
    // context.lineTo(130, 30);
    // context.lineTo(130, 130);
    // context.lineTo(30, 130);
    // context.lineTo(30, 230);
    // context.stroke();

    // // Bevel Line Join
    // context.beginPath();
    // context.lineWidth = 20;
    // context.strokeStyle='red';
    // context.lineJoin='bevel'; // Diagonal at corners/line join points
    // context.moveTo(60, 60);
    // context.lineTo(160, 60);
    // context.lineTo(160, 160);
    // context.lineTo(60, 160);
    // context.lineTo(60, 260);
    // context.stroke();
    
    // // Round Line Join
    // context.beginPath();
    // context.lineWidth = 20;
    // context.strokeStyle='blue';
    // context.lineJoin='round'; // Rounded corners/line join points
    // context.moveTo(90, 90);
    // context.lineTo(190, 90);
    // context.lineTo(190, 190);
    // context.lineTo(90, 190);
    // context.lineTo(90, 290);
    // context.stroke();
    
    // // Lesson5 - shadows
    // - shadowColor
    // - shdowOffseX
    // - shdowOffseY
    // - shadowBlur
    
    // context.beginPath();
    // context.strokeStyle='red';
    // context.lineWidth = 20;
    // context.shadowOffsetX=5;
    // context.shadowOffsetY=5;
    // context.shadowBlur=5;
    // context.shadowColor='blue';
    // context.moveTo(100, 60);
    // context.lineTo(200, 60);
    // context.stroke();
    
    
    // context.beginPath();
    // context.strokeStyle='red';
    // context.lineWidth = 20;
    // context.shadowOffsetX=-5;
    // context.shadowOffsetY=-5;
    // context.shadowBlur=20;
    // context.shadowColor='blue';
    // context.moveTo(350, 60);
    // context.lineTo(450, 60);
    // context.stroke();

    // // Lesson 6 - combining all lessons
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth=15;
    context.lineJoin='miter';
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.shadowBlur=10;
    context.shadowColor='black';
    context.moveTo(60, 80);
    context.lineTo(160, 80);
    context.lineTo(80, 180);
    context.lineTo(180, 180);
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth=15;
    context.lineCap='round';
    context.lineJoin='round';
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.shadowBlur=10;
    context.shadowColor='yellow';
    context.moveTo(340, 80);
    context.lineTo(240, 80);
    context.lineTo(340, 180);
    context.lineTo(240, 180);
    context.stroke();
    
    context.beginPath();
    context.strokeStyle = "green";
    context.lineCap='square';
    context.lineJoin='bevel';
    context.lineWidth=15;
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.shadowBlur=10;
    context.shadowColor='pink';
    context.moveTo(420, 80);
    context.lineTo(520, 80);
    context.lineTo(440, 180);
    context.lineTo(540, 180);
    context.stroke();
    
    
    
}
