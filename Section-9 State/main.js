window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d")
    
    
    // State Stack
    // context.save() -> saving the context state-canvas
    // context.restore() -> restoring the state from the state stack

    // Rect 1
    context.fillStyle='red';
    context.fillRect(240, 100, 120, 120);
    
    // Rect 2
    context.fillStyle='green';
    context.fillRect(390, 100, 120, 120);
    
    // Rect 3
    context.fillStyle='blue';
    context.fillRect(540, 100, 120, 120);
    
};
