
let url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json",
    w= 1000,
    h= 800
    worldmap = "https://rawgit.com/Docwali777/mapdatavisualization/master/world-map.json",
    mapTopo = "https://rawgit.com/Docwali777/mapdatavisualization/master/ne_110m_oceanTOPO.json";





var projection = d3.geoMercator()
var path = d3.geoPath(projection)

  var svg = d3.select("body").append("svg").attr("width", w).attr("height", h)

     d3.json("worldmap.json", function(err, geojson) {
var topology = topojson.topology({mapTopo: mapTopo})
topojson.presimplify(topology);

console.log(geojson)
       svg.append("path")
       .attr("class", "map")
         .attr("d", path(geojson))

     })
