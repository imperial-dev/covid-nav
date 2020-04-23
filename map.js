// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 10, lng: 9},
    mapTypeId: 'satellite'
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
  //Lagos
  {location: new google.maps.LatLng(6.56, 3.22), weight: 430},
  //Abuja
  {location: new google.maps.LatLng(9.06, 7.38), weight: 118},
  //Kano
  {location: new google.maps.LatLng(12, 8.52), weight: 73},
  //Osun
  {location: new google.maps.LatLng(7.77, 4.57), weight: 20},
  //Oyo
  {location: new google.maps.LatLng(7.38, 3.90), weight: 16},
  //Edo
  {location: new google.maps.LatLng(6.32, 5.60), weight: 15},
  //Ogun
  {location: new google.maps.LatLng(7.15,3.33 ), weight: 20},
  //Katsina
  {location: new google.maps.LatLng(12.989998, 7.61), weight: 16},
  //Kwara
  {location: new google.maps.LatLng(8.50, 4.55), weight: 9},
  //Akwa Ibom
  {location: new google.maps.LatLng(5.05, 7.93), weight: 9},
  //Kaduna
  {location: new google.maps.LatLng(10.51498, 7.4405), weight: 9},
  //Bauchi
  {location: new google.maps.LatLng(10.3114, 9.8338), weight: 8},
  //Gombe
  {location: new google.maps.LatLng(10.28, 11.17), weight: 5},
  //Delta
  {location: new google.maps.LatLng(6.75, 6.18), weight: 4},
  //Ekiti
  {location: new google.maps.LatLng(7.62, 5.22), weight: 4},
  //Borno
  {location: new google.maps.LatLng(11.83, 13.15), weight: 9},
  //Ondo
  {location: new google.maps.LatLng(7.25, 5.20), weight: 3},
  //Abia
  {location: new google.maps.LatLng(5.53, 7.48), weight: 2},
  //Enugu
  {location: new google.maps.LatLng(6.50, 7.50), weight: 2},
  //Rivers
  {location: new google.maps.LatLng(4.74, 7), weight: 3},
  //Niger
  {location: new google.maps.LatLng(9.62, 6.55), weight: 2},
  //Jigawa
  {location: new google.maps.LatLng(12.58, 8.97), weight: 2},
  //Benue
  {location: new google.maps.LatLng(7.3311, 8.53404), weight: 1},
  //Anambra
  {location: new google.maps.LatLng(6.20, 7.73), weight: 1},
  //Sokoto
  {location: new google.maps.LatLng(13.0043, 5.2517), weight: 1},
  ];
}
