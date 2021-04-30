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

