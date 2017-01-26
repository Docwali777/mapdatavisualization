
let url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json",
w= 1000,
h= 800;



var projection = d3.geoMercator()
// .scale(w  / Math.PI)
//.translate([w / 2, h / 2])
var path = d3.geoPath(projection)

  var svg = d3.select("body").append("svg")

      var projection = d3.geoMercator()


      var path = d3.geoPath()
        .projection(projection);

     d3.json(url, function(err, geojson) {

       svg.append("path")
         .attr("d", path(geojson))
         console.log(geojson.features[0])
     })
