
 var url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';//

 //
 //console.log('ver: 0.0.2');




 async function dostuff() {
   
   var padding = 30;
  var height = 500;
  var width = 500;
   
    const data = await fetch(url)
    .then(data => data.json());
   
   const xScale = scaleLinear()
      .domain([d3.min(data.data, (d) => d[1]), d3.max(data.data, (d) => d[1])])
      .range([padding, width - padding]);
   
   const yScale = scaleLinear()
      .domain([d3.min(data.data, (d) => d[1]), d3.max(data.data, (d) => d[1])])
      .range([height - padding, padding]);
   
   const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
   
   const svg = d3.select('body')
                  .append("svg")
                    .attr("width", width)
                    .attr("height", height);

    svg.selectAll("rect")
       .data(dataSet)
       .enter()
       .append("rect")
         .attr("x", (d, i) => i * 30)
         .attr("y", (d, i) => height - 3 * d)
         .attr("width", 25)
         .attr("height", (d, i) => 3 * d)
         .attr("fill", "navy");
   
      
   
   
   
   
 }

var data = dostuff();