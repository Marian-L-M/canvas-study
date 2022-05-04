

window.onload = () => {
    // // Definitions
    // const canvas = document.getElementById(targetID);
    // canvas.width  = canvasWidth;
    // canvas.height = canvasHeight;
    // let context = canvas.getContext("2d")


    // Chart Data
    let min = 1;
    let max = 200;
    let data = [
        {label: 'Jan', value: getRandomInt(min, max)},
        {label: 'Feb', value: getRandomInt(min, max)},
        {label: 'Mar', value: getRandomInt(min, max)},
        {label: 'Apr', value: getRandomInt(min, max)},
        {label: 'May', value: getRandomInt(min, max)}
    ];

    const targetID = 'chart';
    const canvasWidth = 600;
    const canvasHeight = 450;

    // Create chart
    const chart = new barChart(targetID, canvasWidth, canvasHeight, data);
    
}
// Functions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Maximum is exclusive, minimum is inclusive
}