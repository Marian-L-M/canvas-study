window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 1200;
    canvas.height = 600;
    let context = canvas.getContext("2d")

    // context.font='font-style font-weight font-size font-family';
    // context.font='45px Verdana';
    
    
    // let fText = "Fill Text on Cavas";
    
    // context.fillText(fText, 80, 100);
    
    
    // let sText = "Stroke Text on Canvas";
    
    // context.strokeText(sText, 80, 300);
    
    // // ================
    // let text = "This text will be styled!";
    
    // context.font='normal bolder 30px fantasy';
    // context.fillText(text, 100, 100);
    
    // context.font='italic 700 24px courier';
    // context.strokeText(text, 100, 200);
    
    // // ================

    // let text = "this text will be in 3D";
    // context.font='normal 600 54px monospace';

    // // Layer 1
    // context.fillStyle='black';
    // context.fillText(text, 99, 299);

    // // Layer 2
    // context.fillText(text, 98, 298);

    // // Layer 3
    // context.fillText(text, 97, 297);

    // // Layer 4
    // context.fillText(text, 96, 296);

    // // Original Text
    // context.fillStyle='violet';
    // context.fillText(text, 100, 300);

    // // Function it up
    // let fontPreset ='normal 600 54px monospace';
    // let text = "this text was drawn with a function"

    // draw3DText(text, 100, 200, fontPreset, 'green', 5, 2, "pink")

    // function draw3DText (text, x, y, style, color, depth, scale3D, color3D){
    //     context.font=style;
    //     context.fillStyle= color3D ||'black';
    //     let scaleFactor = scale3D || 1;
        
    //     for (let i = 0; i < depth; i++){
    //         context.fillText(text, x - (i * scaleFactor), y - (i * scaleFactor));
    //     }
        
    //     context.fillStyle=color;
    //     context.fillText(text, x, y);
    // }
    
    
    // //  Text alignment
    // // Vertical Reference Line
    // context.strokeStyle='red';
    // context.moveTo(300, 20);
    // context.lineTo(300, 430);
    
    
    // // Define a style
    // context.font='italic 400 18px monospace';
    
    // // Apply text align
    // context.textAlign='start';
    // context.fillText("start-text", 300, 20);

    // context.textAlign='center';
    // context.fillText("center-Text", 300, 50);

    // context.textAlign='left';
    // context.fillText("left-Text", 300, 80);

    // context.textAlign='end';
    // context.fillText("end-Text", 300,110);
    
    // context.textAlign='right';
    // context.fillText("right-Text", 300,140);
    // context.stroke();
    
    // // Horizontal Reference Line

    // context.strokeStyle='blue';
    // context.moveTo(20, 300);
    // context.lineTo(580, 300);
    // context.stroke();

    // // Apply textBaseline
    // context.textBaseline='alphabetic';
    // context.fillText("alphabetic-t", 120, 300);

    // context.textBaseline='top';
    // context.fillText("top-t", 220, 300);

    // context.textBaseline='hanging';
    // context.fillText("hanging-t", 340, 300);

    // context.textBaseline='middle';
    // context.fillText("middle-t", 420, 300);

    // context.textBaseline='ideographic';
    // context.fillText("ideo-t", 540, 300);

    // context.textBaseline='bottom';
    // context.fillText("bottom-t", 660, 300);
    
    
    // // Text Shadow
    
    const text = "This text will be shadowed!"

    // Filltext Function
    context.font='normal 700 24px times';
    context.shadowColor='red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=4;
    context.fillText(text, 100, 100);

    // Stroketext Function
    context.font='italic 400 48px monospace';
    context.shadowColor='green';
    context.shadowOffsetX=-5;
    context.shadowOffsetY=-5;
    context.shadowBlur=4;
    context.strokeText(text, 100, 400);
    
    
    
    
    
}
      
