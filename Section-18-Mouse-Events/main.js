window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    // Mouse Events
    // - mousedown / mouseup
    // - mouseover / mouseout
    // - mousemove
    // - click
    // - dblclick

    // canvas.addEventListener('mousedown', function(event){
    //     console.log("le mouse oress")
    //     console.log(event) // Mouse events carriers many properties which amy be used later
    // });
    
    // canvas.addEventListener('mouseup', function(event){
    //     //Mouseup will only trigger when cursor is above canvas element during release
    //     console.log("le up")
    //     console.log(event)
    // });

    // canvas.addEventListener('mousemove', function(event){
    //     console.log("le swoosh")
    //     console.log(event)
    // });

    // canvas.addEventListener('click', function(event){
    //     console.log("le click");
    //     console.log(event);
    // });

    // canvas.addEventListener('dblclick', function(event){
    //     // Will trigger two click events and then trigger the dblclick event
    //     console.log("le click du click");
    //     console.log(event);
    // });

    // Hover events will regard canvas as a whole
    canvas.addEventListener('mouseover', function(event){
        console.log("'over on");
        console.log(event);
    });

    canvas.addEventListener('mouseout', function(event){
        console.log("'over out");
        console.log(event);
    });
};
