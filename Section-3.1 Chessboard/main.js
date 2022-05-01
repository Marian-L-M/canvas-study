window.onload = () => {
    
    // Definitions
    const canvas = document.getElementById("canvas-element");
    canvas.width  = 1200;
    canvas.height = 600;
    let context = canvas.getContext("2d")

    // // Frame
    // context.strokeStyle='black';
    // context.strokeRect(250, 100, 400, 400);
    
    
    // // Chess board
    // let lightCellColor = "#ddb180";
    // let darkCellColor = "#7c330c";
    // let cellWidth = 50
    // for (let i = 1; i <= 8; i++){
    //     for (let j = 1; j<= 8; j++){
    //         if (((j % 2) !=0) && ((i % 2) !=0) || ((j % 2) == 0) && ((i % 2) ==0)) {
    //             context.fillStyle=lightCellColor;
    //         } else {
    //             context.fillStyle=darkCellColor;
    //         }
    //         context.fillRect(250 + (j*cellWidth - cellWidth), 100 + (i*cellWidth-cellWidth), cellWidth,cellWidth);
    //     } 
    // }

    // Function it up!
    drawChessBoard(250, 100, 600, 600, 20, "#ddb180", "#7c330c", "black")

    function drawChessBoard(startX, startY, boardWidth, boardHeight, cellWidth, cellColor1, cellColor2, boardFrame) {
        // Frame
        context.strokeStyle=boardFrame;
        context.strokeRect(startX, startY, boardWidth, boardHeight);

        for (let i = 1; i <= (boardHeight / cellWidth); i++){
            for (let j = 1; j<= (boardWidth / cellWidth); j++){
                if ( (i + j) % 2 == 0) {
                    context.fillStyle=cellColor1;
                } else {
                    context.fillStyle=cellColor2;
                }
                context.fillRect(startX + (j*cellWidth - cellWidth), startY + (i*cellWidth-cellWidth), cellWidth,cellWidth);
            } 
        }
    }
    
    
    
    
        
    
    
    
    
}
