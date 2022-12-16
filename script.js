var file = d3.csv("nodejs.csv");

// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 650 - margin.left - margin.right,
  height = 650 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Labels of row and columns
const myVars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]

// Build X scales and axis:
const x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.01);
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))

// Build X scales and axis:
const y = d3.scaleBand()
  .range([0, height ])
  .domain(myVars)
  .padding(0.01);
svg.append("g")
  .call(d3.axisLeft(y));

// Build color scale
const myColor = d3.scaleLinear()
  //.range(["white", "#69b3a2"])
  .range(["#FFE5E5", "#FF0000"])
  .domain([1,18])

//Read the data


file.then( function(data) {

  svg.selectAll()
      .data(data, function(d) {return d.Line})
      .join("rect")
      .attr("x", function(d) { return x(d.Line) })
      .attr("y", function(d) { return y(d.Line) })
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.Changes)} )
//  svg.selectAll("rect")
//   .data(data)
//   .enter()
//   .append("rect")
//     .attr("x", 0)
//     .attr("y", function(d) {
//         return d
//     })
//     .attr("width", x.bandwidth() )
//     .attr("height", y.bandwidth() )
//     .attr('fill', '#69a3b2'); // color based on alpha value

})