
let url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json",
    w= 1000,
    h= 800
    worldmap = "https://rawgit.com/Docwali777/mapdatavisualization/master/world-map.json";





var projection = d3.geoMercator()
.scale(w  / Math.PI)

var path = d3.geoPath(projection)

  var svg = d3.select("body").append("svg").attr("width", w).attr("height", h)

      var projection = d3.geoMercator()


      var path = d3.geoPath()
        .projection(projection);




     d3.json(worldmap, function(err, geojson) {

       svg.append("path")
       .attr("class", "map")
         .attr("d", path(geojson))
         console.log(geojson.features[0])
     })
