
// d3.select("body")
//   .on("mousemove", doSomething);

// function doSomething(event){
//     d3.select("svg")
//     .transition().duration(50)
//         .style("background","whitesmoke");
// }

// d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
//   .then(function(data){
//     var svg = d3.select("svg");
//     var width = svg.attr("width");
//     var height = svg.attr("height");
//     var xScale = d3.scaleLinear()
//               .domain([d3.min(data, d => d['Xi']), d3.max(data, d => d['Xi'])])
//               .range([0, width]);
//     var yScale = d3.scaleLinear()
//               .domain([d3.min(data, d => d['Yi']), d3.max(data, d => d['Yi'])])
//               .range([0, height]);

//     var circles = svg.selectAll("circle").data(data);

//     circles.join("circle")
//             .attr("cx", function(d){return xScale(d['Xi']);})
//             .attr("cy", function(d){return yScale(d['Yi']);})
//             .attr("r", 5);

//    });


 
setTimeout(function(){
    d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
      .then(function(data){
      var svg = d3.select("svg");
      var width = svg.attr("width");
      var height = svg.attr("height");
      var xScale = d3.scaleLinear()
                .domain([d3.min(data, d => d['Xi']), d3.max(data, d => d['Xi'])])
                .range([0, width]);
      var yScale = d3.scaleLinear()
                .domain([d3.min(data, d => d['Yi']), d3.max(data, d => d['Yi'])])
                .range([0, height]);
  
      var circles = svg.selectAll("circle").data(data);
  
      circles.join("circle")
              .transition().duration(300)
              .attr("cx", function(d){return xScale(d['Xi']);})
              .attr("cy", function(d){return yScale(d['Yi']);})
              .attr("r", 5)
              .attr("fill", function(d){return d['color']})
              .transition().duration(2000)
              .ease(d3.easeExp)
              .attr("cx", function(d){return xScale(d['Xf']);})
              .attr("cy", function(d){return yScale(d['Yf']);})
              ;
     });
  }, 1000);





