const canvas = document.getElementById("hello-world-canvas");

const context = canvas.getContext("2d")

// context.drawImage(Image, dX, dY); return image at coordinates (top left of img)
// context.drawImage(Image, dX, dY, dWidth, dHeight);  // return with set size
// context.drawImage(Image, sX, sy, sw, sh, dX, dY, dWidth, dHeight); s is clipping x/y from where + how big the clip area is

// let img = new Image();
// img.src = "./pokemons.png";

// // Draw img will not work if img is not loaded
// img.onload = function() {
//     // context.drawImage(img, 0, 0, 100, 100); 
//     context.drawImage(img, 350, 250, 220, 220, 50, 10, 80, 80); 
// }


// // Catch 'em Pokemon
// // Cut out snippets from and image an return
// img.onload = function() {

//     // Pikachu
//     context.drawImage(img, 30, 20, 150, 150, 0, 0, 150, 150); 
    
//     // Squirtle
//     context.drawImage(img, 430, 200, 150, 150, 150, 0, 150, 150); 
    
//     // Bulbasaur
//     context.drawImage(img, 1030, 20, 150, 150, 300, 0, 150, 150); 
    
// }

let img = new Image();
img.src = "./amsterdam.jpg";

// Image Data Functions
// - createImageData() create a blank ImageData object,
// - getImageData() Returns an ImageData object that copies the pixel data for the specified rectangle
// - putImageData() Puts the image data (from specified image data object) back onto canvas

// Image data object returns a massive array for each pixels with RGBA (0-255) values. However not in pairs of 4 but with 1-R, 2-G,3-B,4-A,5-R ...

img.onload = function() {
    context.drawImage(img, 180, 35);

    let imageData = context.getImageData(180, 35, 550, 360)

    for(let i = 0; i < imageData.data.length; i+=4) // I needs to increment by 4 each iteration to factor in that there are four array entries per color
    {
        // Use average of all values to create black and white image
        let average = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3
        imageData.data[i] = average; // Red
        imageData.data[i+1] = average; // Green
        imageData.data[i+2] = average;  // Blue
        // imageData.data[i+3] = 40 // Alpha
    }

    // Negative image - Maximum value minus original value
    // imageData.data[i] = 255 - imageData.data[i]; // Red
    // imageData.data[i+1] = 255 - imageData.data[i+1]; // Green
    // imageData.data[i+2] = 255 - imageData.data[i+2];  // Blue

    // E.g.  only overwriting [i+3] (comment out rest) would just change the opacity of the image. Changing a color value would act as a color filter
    context.putImageData(imageData, 180, 35);
    
}
