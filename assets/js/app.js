// D3- Homework

var width = parseInt(d3.select("#scatter").style("width"));

// Construct graph
var height = width - width / 4;

var margin = 20;

var labelArea = 110; 

var tPadBot = 40;
var tPadleft = 40;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

// Set radius
var circRadius;
function crGet() {
    if (width <= 530) {
        circRadius = 5;
    }
    else {
        circRadius = 10;
    }
}
crGet();

// Create Label for Axes
svg.append("g").attr("class", "xText");

var xText = d3.select("xText");

    xText.attr(
        "transform",
        "translate("+
        ((width - labelArea) / 2 + labelArea) + 
        ", " +
        (height = margin - tPadBot) +
        ")"
    );

    xText
    .append("text")
    .attr("y", -26)
    .attr("date-name", "poverty")
    .attr("data-axis", "x")
    .attr("class", "aText active x")
    .text("In Poverty (%)");

var leftTextX = margin + tPadleft;
var leftTextY = (height + labelArea) / 2 - labelArea;

svg.append("g").attr("class", "yText");

var yText = d3.select(".yText");

    yText.attr(
        "transform",
        "translate(" + leftTextX + ", " + leftTextY +")rotate(-90)"
    );

   yText
   .append("text")
   .attr("y", 26)
   .attr("date-name", "healthcare")
   .attr("data-axis", "x")
   .attr("class", "aText active y")
   .text("Lacks Healthcare (%)");  

// Import csv
d3.csv("assets/data/data.csv").then(function(data) {
    visualize(data);
});

    function visualize(theData) {
        var curX = "poverty";
        var curY = "healthcare";

        var xMin;
        var xMax;
        var yMin;
        var yMax;

// Min & Max for x
function xMinMax() {
    xMin = d3.min(theData, function(d) {
        return parseFloat(d[curX]) * 0.90;
    });

    xMax = d3.min(theData, function(d) {
        return parseFloat(d[curX]) * 1.10;
    });
}

// Min & Max for y
function yMinMax() {
     yMin = d3.min(theData, function(d) {
    return parseFloat(d[curY]) * 0.90;
    });

    yMax = d3.min(theData, function(d) {
    return parseFloat(d[curY]) * 1.10;
    });
}

// Scatter Plot

xMinMax();
yMinMax();

var xScale = d3
.scaleLinear()
.domain([xMin, xMax])
.range([margin + labelArea, width - margin]);

var yScale = d3
.scaleLinear()
.domain([yMin, yMax])
.range([margin + labelArea, width - margin]);    

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisBottom(yScale);

// Place axis
svg
.append("g")
.call(xAxis)
.attr("class", "xAxis")
.attr("transform", "translate(0," + (height - margin - labelArea) + ")");
vg
.append("g")
.call(yAxis)
.attr("class", "yAxis")
.attr("transform", "translate(0," + (height - margin - labelArea) + ")");  

// Grouping circles and labels
var theCircles = svg.selectAll("g the Circles").data(theData).enter();

theCircles
.append("circle")
.attr("cx", function(d) {
    return xScale(d[curX]);
})
.attr("cy", function(d) {
    return yScale(d[curY]);    
})
.attr("r", circRadius) 
.attr("class", function(d){
    return "stateCircle" + d.attr;
});    