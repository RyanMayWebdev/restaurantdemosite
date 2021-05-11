// [START maps_add_map]
// Initialize and add the map
function initMap() {
  // [START maps_add_map_instantiate_map]

  const choisushi = {
    lat: 43.444795519260005,
    lng: -79.683755265047
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: choisushi,
  });
  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]

  const marker = new google.maps.Marker({
    position: choisushi,
    map: map,
  });
  // [END maps_add_map_instantiate_marker]
}
// [END maps_add_map]


// Add click listening events to all of the menu page titles

var menuLinks = document.querySelectorAll(".menuOption");

for (let x = 0; x < menuLinks.length; x++) {
  menuLinks[x].addEventListener("click", displayMenu);
}


// This makes the related menu visible when its relative title is clicked and makes all other menus invisible

function displayMenu() {
  var menuId = this.id;
  document.getElementById("entrees").classList.remove("visible");
  document.getElementById("appetizers").classList.remove("visible");
  // document.getElementById("rolls").classList.remove("visible");
  // document.getElementById("desserts").classList.remove("visible");

  if (menuId.includes("appetizerLink")) {
    document.getElementById("appetizers").classList.add("visible");
  } else if (menuId.includes("entreeLink")) {
    document.getElementById("entrees").classList.add("visible");
  } else if (menuId.include("rollLink")) {
    document.getElementById("rolls").classList.add("visible");
  } else {
    document.getElementById("desserts").classList.add("visible");
  }

}