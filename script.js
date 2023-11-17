// Create map and set view center point
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// HTML elements
const list = document.getElementById("point-list");
const clearBtn = document.getElementById("clear");

// var marker = L.marker([51.5, -0.09]).addTo(map);

// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

var popup = L.popup();

points = []

var layerGroup = L.layerGroup().addTo(map);

// Functions
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    
        // Create marker
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(layerGroup);

    // Create list element
    const item = document.createElement("li");

    item.innerHTML = `Lat:${e.latlng.lat} Lng: ${e.latlng.lng}`;

    list.appendChild(item);
    points.push(e.latlng);
    console.log(points);
}

function clearAll() {
  // var listLength = list.children.length;

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  layerGroup.clearLayers();

}


// Event Listeners
map.on('click', onMapClick);
clearBtn.addEventListener('click', clearAll);
// Features I'd like to add:
  // Create geometry features
    // Point
    // Polygon
    // Line
    // CSV/Geojson upload
    // Shapefile upload
  // Change Project CRS
    // British National Grid
