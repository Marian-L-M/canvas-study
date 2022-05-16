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
    context.save();
    
    
    // Rect 2
    context.fillStyle='green';
    context.fillRect(390, 100, 120, 120);
    context.save();
    
    // Rect 3
    context.fillStyle='blue';
    context.fillRect(540, 100, 120, 120);
    context.save();
    
    // Rect 4
    context.restore();
    context.fillRect(240, 300, 120, 120);
    
    // Rect 5
    context.restore();
    context.fillRect(390, 300, 120, 120);
    
    // Rect 6
    context.restore();
    context.fillRect(540, 300, 120, 120);

    // Order of restore state (here fill style) is LIFO/FILO e.g. first restored would be blue-4, green-5, red-6 
};
