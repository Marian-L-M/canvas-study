/**
 *  bar.js
 * simple, elegant bar chart library
 * @param {date} - version 1.0
 * @param {url}
 * 
 * Copyright 2022 @param {Marian Maschke}
 * Released under MIT License
 * @param {license url}
 */

'use strict';

// Constructor
function BarChart(targetID, width, height, data){
    // Base
    const chart = this; // syntactic sugar, but more readable

    // Specify configurations
    chart.configureChart(targetID, width, height, data);

    // Pre Operations
    chart.performPreOperations();

    // Draw Chart
    chart.drawChart();


}


BarChart.prototype.configureChart = function(targetID, width, height, data){
    // Base
    const chart = this;

    // Global Canvas Specifications
    chart.setCanvasParameters(targetID, width, height, data);

    // Global Chart Specifications
    chart.setChartParameters();
};


BarChart.prototype.setCanvasParameters = function(targetID, width, height, data){
        // Base
        const chart = this;
    
        // Canvas specification from arguments
        chart.id = targetID;
        chart.width = width;
        chart.height = height;
        chart.data = data;    
};

BarChart.prototype.setChartParameters = function() {
        // Base
        const chart = this;

        // Axis configuration
        chart.axisRatio = 10;
        chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
        chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
        chart.axisColor = '#b1b1b1';
        chart.axisWidth = 0.75;
    
        // Label Configurations
        chart.fontRatio = 3;
        chart.fontFamily = 'times';
        chart.fontStyle = 'normal';
        chart.fontWeight = '300';
        chart.fontColor = '#666666';
        chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
        chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;
    
        // Guideline Configurations
        chart.guideLineColor = '#e5e5e5';
        chart.guideLineWidth = 0.5;
}

BarChart.prototype.performPreOperations = function(){
    // Base
    const chart = this; 

    // Create Canvas
    chart.createCanvas();

    // Get data
    chart.handleData();

    // Prepare data
    chart.prepareData();
};

BarChart.prototype.createCanvas = function() {
    // Base
    const chart = this; 

    // Create Canvas
    let canvas = document.createElement('canvas');
    canvas.id =chart.id + '-' + Math.random(); // Create a somewhat unqiue ID
    canvas.width = chart.width;
    canvas.height = chart.height;


    // Append canvas to target container
    document.getElementById(chart.id).innerHTML = ''; //clean container
    document.getElementById(chart.id).appendChild(canvas); // add canvas to clean container

    // Add canvas to chart object
    chart.canvas = canvas;
    chart.context = canvas.getContext('2d')
};

BarChart.prototype.handleData = function (){
    // Base
    const chart = this; 

    // Data sets
    chart.labels = [];
    chart.values = [];

    // Handle Data
    chart.data.forEach(function(item){
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });
};

BarChart.prototype.prepareData = function(){
    // Base
    const chart = this; 

    // Global Variables
    // chart.itemsNum = chart.data.length;
    // Nasty bug fix: An empty array is added to data and I dont know why.
    chart.itemsNum = chart.data.length;
    
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);

    // Axis specifications
    chart.verticalAxisWidth = chart.height - 2 * chart.verticalMargin;
    chart.horizontalAxisWidth = chart.width - 2 * chart.horizontalMargin;

    // Label specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisWidth / (chart.itemsNum); // Added +1 to counter balance -1 in items Num
}

BarChart.prototype.drawChart = function(){
    // Base
    const chart = this; 

    // Vertical Axis
    chart.drawVerticalAxis();

    // Vertical Labels
    chart.drawVerticalLabels();

    // Horizontal Axis
    chart.drawHorizontalAxis();

    // Horizontal Labels
    chart.drawHorizontalLabels();

    // Horizontal Guidelines
    chart.drawHorizontalGuidelines();

    // Vertical Guidelines
    chart.drawVerticalGuidelines();

    // Bars
    chart.drawBars();

    console.log(chart.data)
};

BarChart.prototype.drawVerticalAxis = function() {
    // Base
    const chart = this; 

    // Vertical Axis
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin);
    chart.context.lineTo(chart.horizontalMargin, chart.height - chart.verticalMargin)
    chart.context.stroke();
}

BarChart.prototype.drawVerticalLabels = function () {
    // Base
    const chart = this; 

    //Label specifications
    const labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px ' + chart.fontFamily
    chart.context.font = labelFont;
    chart.context.textAlign = 'right';
    chart.context.fillStyle = chart.fontColor;

    // Scale Values
    // const scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq
    // Tutorial formular seems mathematically redundand(verticallabelFeq= verticalUpperbound/itemsNum) -> simplified it:
    const scaledVerticalLabelFreq = chart.verticalAxisWidth / chart.itemsNum
    // General note: the number of vertical labels(value) seem to be bound to the number of items. Pretty stupid.

    // Draw labels
    for(let i = 0; i <= chart.itemsNum; i++){
        let labelText = chart.verticalUpperBound - i * chart.verticalLabelFreq;
        let verticalLabelX = chart.horizontalMargin - chart.horizontalMargin / chart.axisRatio;
        let verticalLabelY = chart.verticalMargin + i * scaledVerticalLabelFreq;
        chart.context.fillText(labelText, verticalLabelX, verticalLabelY)

    }

}

BarChart.prototype.drawHorizontalAxis = function() {
    // Base
    const chart = this; 

    // Horizontal Axis
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.lineTo(chart.width - chart.horizontalMargin, chart.height - chart.verticalMargin)
    chart.context.stroke();
}

BarChart.prototype.drawHorizontalLabels = function() {
    // Base
    const chart = this; 

    //Label specifications
    const labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px ' + chart.fontFamily
    chart.context.font = labelFont;
    chart.context.textAlign = 'center';
    chart.context.textBaseline = 'top';
    chart.context.fillStyle = chart.fontColor;

    // Draw labels
    for(let i = 0; i <= chart.itemsNum - 1; i++){
        // Subtract 1 from itemsNum to remove empty array added by prototype
        let horizontalLabelX = chart.horizontalMargin + (i * chart.horizontalLabelFreq )+ chart.horizontalLabelFreq / 2; 
        let horizontalLabelY = chart.height - chart.verticalMargin + chart.verticalMargin/chart.axisRatio;
        chart.context.fillText(chart.labels[i], horizontalLabelX, horizontalLabelY)

    }

}

BarChart.prototype.drawHorizontalGuidelines = function() {
    // Base
    const chart = this; 

    // Specifications
    chart.context.strokeStyle = chart.guideLineColor;
    chart.context.lineWidth = chart.guideLineWidth;

    // Scale Values
    const scaledVerticalLabelFreq = chart.verticalAxisWidth / chart.itemsNum;

    // Draw Guidelines
    for (let i =  0; i <= chart.itemsNum; i++){
        // Starting point coordinates
        let horizontalGuidelineStartX = chart.horizontalMargin;
        let horizontalGuidelineStartY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        // End point coordinates
        let horizontalGuidelineEndX = horizontalGuidelineStartX + chart.horizontalAxisWidth;
        let horizontalGuidelineEndY = horizontalGuidelineStartY;

        // Draw lines
        chart.context.beginPath();
        chart.context.moveTo(horizontalGuidelineStartX, horizontalGuidelineStartY);
        chart.context.lineTo(horizontalGuidelineEndX, horizontalGuidelineEndY);
        chart.context.stroke();
    }

}

BarChart.prototype.drawVerticalGuidelines = function () {
    // Base
    const chart = this;  

    // Specifications
    chart.context.strokeStyle = chart.guideLineColor;
    chart.context.lineWidth = chart.guideLineWidth;

    //Draw Vertical Guidelines
    for(let i = 0; i <= chart.itemsNum; i++){

        // Start Position
        let verticalGuidelineStartX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        let verticalGuidelineStartY = chart.height - chart.verticalMargin;

        // End position
        let verticalGuidelineEndX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        let verticalGuidelineEndY = chart.verticalMargin;

        // Draw lines
        chart.context.beginPath();
        chart.context.moveTo(verticalGuidelineStartX, verticalGuidelineStartY);
        chart.context.lineTo(verticalGuidelineEndX, verticalGuidelineEndY);
        chart.context.stroke();
    }
}

BarChart.prototype.drawBars = function(){
    // Base
    const chart = this; 

    
    for(let i= 0; i < chart.itemsNum; i++) {
        
        let color = chart.createRandomRGBColor();
        let fillOpacity = '0.3';
        let fillColor = 'rgba('+ color.r + ',' + color.g + ',' + color.b + ',' + fillOpacity + ')'
        let borderColor = 'rgb('+ color.r + ',' + color.g + ',' + color.b + ')'

        chart.context.beginPath();

        let barX = chart.horizontalMargin + i * chart.horizontalLabelFreq + chart.horizontalLabelFreq / chart.axisRatio;
        let barY = chart.height - chart.verticalMargin;
        let barWidth = chart.horizontalLabelFreq - (2 * chart.horizontalLabelFreq / chart.axisRatio);
        let barHeight = (-1 * chart.verticalAxisWidth) * chart.values[i] / chart.maxValue;

        chart.context.rect(barX, barY, barWidth, barHeight);
        chart.context.fillStyle = fillColor;
        chart.context.strokeStyle=borderColor;
        chart.context.stroke();
        chart.context.fill();

    }
}

BarChart.prototype.createRandomRGBColor = function() {
    let red = getRandomInt(0, 257);
    let green = getRandomInt(0, 257);
    let blue = getRandomInt(0, 257);
    return {r: red, g:green, b: blue};
};