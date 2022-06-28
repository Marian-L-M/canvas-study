window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");


    // Game Object
    let flappyMonster = new FlappyMonster(canvas)
    flappyMonster.start();

};