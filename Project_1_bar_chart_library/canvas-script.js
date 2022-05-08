

window.onload = () => {

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

    // Chart Specifications
    const targetID = 'chart';
    let canvasWidth = 600;
    let canvasHeight = 450;


    // Create chart
    const chart = new BarChart(targetID, canvasWidth, canvasHeight, data);
    
}
// Functions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Maximum is exclusive, minimum is inclusive
}