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

