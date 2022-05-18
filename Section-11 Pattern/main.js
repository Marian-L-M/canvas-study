window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d")
    
    // context.createPattern(Image, repetition);
    // repetition: repeat(both directions), repeat-x(horizontal), repeat-y (vertical), no-repeat(neither) -> pass as string

    let patternImage = new Image();
    patternImage.src = 'apple.png';

    // Fill a rect with pattern (It basically works like css background image)
    patternImage.onload = function () {
        // let pattern = context.createPattern(patternImage, 'repeat');
        // let pattern = context.createPattern(patternImage, 'repeat-x');
        // let pattern = context.createPattern(patternImage, 'repeat-y');
        let pattern = context.createPattern(patternImage, 'no-repeat');
        context.fillStyle= pattern;
        context.fillRect(0,0,900,450);
        
    };
    
};
