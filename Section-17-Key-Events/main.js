// Concept for animation in canvas:
// Update-> clear -> draw (repeat)

window.onload = function(){
    
    //　Definitions
    const canvas = document.getElementById("le-canvas");
    const context = canvas.getContext("2d");

    // Key Events (Classic Javascript)
    // keydown
    // keypress
    // keyup

    // Key-down -> log which character is pressed (Here event -> to get the character itself: event.key; event.keyCode is a numeric value (depreciated))
    // https://stackoverflow.com/questions/35394937/keyboardevent-keycode-deprecated-what-does-this-mean-in-practice
    // The sample below is pointless
    // window.addEventListener('keydown', function(event){
    //     // console.log(event);
    //     // console.log("Key: " + event.key + " Keycode: " + event.keyCode)

    //     // // Depreceated
    //     // if(event.keyCode === 65) {
    //     //     console.log('A pressed')
    //     // }else if (event.keyCode === 66){
    //     //     console.log("b pressed")
    //     // }

    //     // Way to go
    //     if(event.key === "a") {
    //         console.log('A pressed')
    //     }else if (event.key === "Enter"){
    //         console.log("Enter pressed")
    //     }

    //     // alternatively [event.code] is also fine
    // });


    // Look up values or names to make it work with new version
    const KEY_CODE = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    window.addEventListener('keydown', function(event){
        switch(event.keyCode){
            case KEY_CODE.LEFT:
                console.log('LEFT ARROW PRESSED')
                break;
            case KEY_CODE.RIGHT:
                console.log('RIGHT ARROW PRESSED')
                break;
            case KEY_CODE.UP:
                console.log('UP ARROW PRESSED')
                break;
            case KEY_CODE.DOWN:
                console.log('DOWN ARROW PRESSED')
                break;
        default:

        }
    });
    
};
