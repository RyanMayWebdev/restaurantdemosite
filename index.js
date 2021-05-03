// [START maps_add_map]
// Initialize and add the map
function initMap() {
  // [START maps_add_map_instantiate_map]
  // The location of Uluru
  const choisushi = { lat: 43.444795519260005, lng: -79.683755265047};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: choisushi,
  });
  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: choisushi,
    map: map,
  });
  // [END maps_add_map_instantiate_marker]
}
// [END maps_add_map]